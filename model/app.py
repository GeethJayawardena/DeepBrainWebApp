from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    # model prediction logic goes here
    return jsonify({'result': 'No hematoma detected'})

if __name__ == '__main__':
    app.run(debug=True)
