from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

client = MongoClient('mongodb://localhost:27017')
db = client['tienda']
users_collection = db['usuarios']
pass_collection = db['usuarios']

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('_id')
    password = data.get('Contraseña')
    
    # Busca al usuario en la base de datos MongoDB
    user = users_collection.find_one({'NombreUsuario': username})
    pass = pass_collection.find_one({'Password': password})
    
    if user:
        return jsonify({'response': 'Inicio de sesión exitoso'})
    else:
        return jsonify({'response': 'Credenciales incorrectas'})

if __name__ == '__main__':
    app.run(port=8000)