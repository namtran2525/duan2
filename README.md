# Text to Speech App

This repository provides a small command‑line utility and a simple web
application that convert text to speech using the Google Text‑to‑Speech REST
API.

## Setup

1. Install the required dependencies:

```bash
pip install -r requirements.txt
```

2. Obtain a Google Cloud API key that has access to the Text‑to‑Speech API.
   Store it in the environment variable `GOOGLE_TTS_API_KEY` or provide it as a
   command‑line argument when running the script.

## Usage

Run the script with the text you want to synthesize and the output MP3 file
name. The API key can be passed as the third argument or supplied through the
`GOOGLE_TTS_API_KEY` environment variable.

```bash
python text_to_speech.py "Hello world" output.mp3 YOUR_API_KEY
```

If the API key is stored in the environment variable, you can omit it from the
command:

```bash
export GOOGLE_TTS_API_KEY="YOUR_API_KEY"
python text_to_speech.py "Hello world" output.mp3
```

Optional parameters can be provided for the voice language code, gender, pitch
and speed:

```bash
python text_to_speech.py "Hello" output.mp3 $GOOGLE_TTS_API_KEY en-US FEMALE 0 1.2
```

The synthesized speech will be saved to the specified MP3 file.

### Web application

You can also run a small Flask web application that provides a text box and
audio player. Start the server with:

```bash
export GOOGLE_TTS_API_KEY="YOUR_API_KEY"
python app.py
```

Then open `http://localhost:5000` in your browser. Paste the text you want to
synthesize, choose the voice, pitch (emotion) and speed, and click **Speak** to
listen to the generated audio.
