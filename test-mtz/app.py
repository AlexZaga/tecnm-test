from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
app = Flask(__name__)
CORS(app, resources={r"/all": {"origins": "*"}}
client = MongoClient('mongodb://localhost:27017')
db = client['proyectotienda']  
users_collection = db['usuarios']  
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('id')
    password = data.get('Contraseña')
    # Busca al usuario en la base de datos MongoDB
    user = users_collection.find_one({'NombreUsuario': username, 'Password': password})
    if user==True:
        return jsonify({'message': 'Sesion iniciada'})
    else:
        return jsonify({'message': 'Sesion fallida'})

if __name__ == '__main__':
    app.run(port=8000)