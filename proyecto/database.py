from pymongo import MongoClient
import certifi

def dbConnection(): #funcion para conectar base de datos
    try:
        client=MongoClient('localhost', 27017) #direccion de MongoDB Compass
        db = client["test"] #base de datos
    except ConnectionError:
        print('Error de conexion con la base de datos')
    return db

