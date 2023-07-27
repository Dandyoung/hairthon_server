# app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/flask', methods=['GET'])
def flask_data():
    data = {'message': 'Hello from Flask Server!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
