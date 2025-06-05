import os
from io import BytesIO
from flask import Flask, request, render_template, send_file
from text_to_speech import synthesize_bytes

app = Flask(__name__)
API_KEY = os.getenv("GOOGLE_TTS_API_KEY")

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/synthesize', methods=['POST'])
def synthesize_route():
    if not API_KEY:
        return "API key not configured", 500
    text = request.form.get('text', '')
    voice = request.form.get('voice', 'en-US')
    gender = request.form.get('gender', 'NEUTRAL')
    pitch = float(request.form.get('pitch', 0))
    speed = float(request.form.get('speed', 1))
    audio = synthesize_bytes(text, API_KEY, voice, gender, pitch, speed)
    return send_file(
        BytesIO(audio),
        mimetype='audio/mpeg',
        as_attachment=False,
        download_name='speech.mp3',
    )

if __name__ == '__main__':
    app.run(debug=True)
