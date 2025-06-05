# Text to Speech App

This repository provides a small command‑line utility that converts text to
speech using the Google Text‑to‑Speech REST API.

## Setup

1. Install the required dependency:

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

The synthesized speech will be saved to the specified MP3 file.
