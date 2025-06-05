import os
import sys
import base64
import json
import requests


API_URL = "https://texttospeech.googleapis.com/v1/text:synthesize"


def synthesize_bytes(
    text: str,
    api_key: str,
    voice: str = "en-US",
    gender: str = "NEUTRAL",
    pitch: float = 0.0,
    speed: float = 1.0,
) -> bytes:
    """Return synthesized speech audio as bytes."""
    url = f"{API_URL}?key={api_key}"
    payload = {
        "input": {"text": text},
        "voice": {
            "languageCode": voice,
            "ssmlGender": gender,
        },
        "audioConfig": {
            "audioEncoding": "MP3",
            "pitch": pitch,
            "speakingRate": speed,
        },
    }
    response = requests.post(url, json=payload)
    response.raise_for_status()
    audio_content = response.json().get("audioContent")
    if not audio_content:
        raise RuntimeError("API response missing audio content")
    return base64.b64decode(audio_content)


def synthesize(
    text: str,
    output_file: str,
    api_key: str,
    voice: str = "en-US",
    gender: str = "NEUTRAL",
    pitch: float = 0.0,
    speed: float = 1.0,
) -> None:
    """Synthesize speech from text and save to a file."""
    audio = synthesize_bytes(text, api_key, voice, gender, pitch, speed)
    with open(output_file, "wb") as out:
        out.write(audio)
        print(f"Audio content written to {output_file}")


def main(argv: list[str]) -> None:
    if len(argv) < 3:
        print(
            "Usage: python text_to_speech.py '<text>' output.mp3 [API_KEY] [voice] [gender] [pitch] [speed]"
        )
        print("Alternatively, set GOOGLE_TTS_API_KEY env variable.")
        sys.exit(1)
    text = argv[1]
    output_file = argv[2]
    api_key = argv[3] if len(argv) > 3 else os.getenv("GOOGLE_TTS_API_KEY")
    voice = argv[4] if len(argv) > 4 else "en-US"
    gender = argv[5] if len(argv) > 5 else "NEUTRAL"
    pitch = float(argv[6]) if len(argv) > 6 else 0.0
    speed = float(argv[7]) if len(argv) > 7 else 1.0
    if not api_key:
        print("Error: API key not provided.")
        sys.exit(1)
    synthesize(text, output_file, api_key, voice, gender, pitch, speed)


if __name__ == "__main__":
    main(sys.argv)
