import os
import sys
import base64
import json
import requests


API_URL = "https://texttospeech.googleapis.com/v1/text:synthesize"


def synthesize(text: str, output_file: str, api_key: str) -> None:
    """Synthesize speech from text using Google Text-to-Speech API key."""
    url = f"{API_URL}?key={api_key}"
    payload = {
        "input": {"text": text},
        "voice": {"languageCode": "en-US", "ssmlGender": "NEUTRAL"},
        "audioConfig": {"audioEncoding": "MP3"},
    }
    response = requests.post(url, json=payload)
    response.raise_for_status()
    audio_content = response.json().get("audioContent")
    if not audio_content:
        raise RuntimeError("API response missing audio content")

    with open(output_file, "wb") as out:
        out.write(base64.b64decode(audio_content))
        print(f"Audio content written to {output_file}")


def main(argv: list[str]) -> None:
    if len(argv) < 3:
        print("Usage: python text_to_speech.py '<text>' output.mp3 [API_KEY]")
        print("Alternatively, set GOOGLE_TTS_API_KEY env variable.")
        sys.exit(1)
    text = argv[1]
    output_file = argv[2]
    api_key = argv[3] if len(argv) > 3 else os.getenv("GOOGLE_TTS_API_KEY")
    if not api_key:
        print("Error: API key not provided.")
        sys.exit(1)
    synthesize(text, output_file, api_key)


if __name__ == "__main__":
    main(sys.argv)
