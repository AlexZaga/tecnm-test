from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from pymongo import MongoClient
import database as dbase
from product import Product

app = Flask(__name__)
app.secret_key = 'tu_clave_secreta'  # Cambia esto por una clave segura

# Configura la conexión a la base de datos MongoDB
client = MongoClient('localhost', 27017)
db = client['test']
users_collection = db['usuarios']

# Configura Flask-Login
login_manager = LoginManager()
login_manager.login_view = 'login'
login_manager.init_app(app)

# Definición de la clase de usuario
class User(UserMixin):
    def __init__(self, username):
        self.username = username

    def get_id(self):
        return self.username  # Devuelve el nombre de usuario como identificador único

    @staticmethod
    def get(username):
        user_data = users_collection.find_one({'username': username})
        if not user_data:
            return None
        return User(username=user_data['username'])

@login_manager.user_loader
def load_user(username):
    return User.get(username)

@app.route('/')
def home():
    products = db['products']
    productsReceived = products.find()
    return render_template('login.html', products = productsReceived)

@app.route('/normal')
def gestion_usuarios():
    products = db['products']
    productsReceived = products.find()
    return render_template('normal.html', products = productsReceived)

@app.route('/gestorUsuario')
def gestor_usuario():
    usuarios_normales = users_collection.find({'tipo': 'normal'})
    return render_template('gestorUsuario.html', usuarios_normales=usuarios_normales, title='Gestor de Usuarios')

#method post
@app.route('/products', methods=['POST'])
def addProduct():
    products = db['products']
    name = request.form['name']
    price = request.form['price']
    quantity = request.form['quantity']

    if name and price and quantity:
        product = Product(name, price, quantity)
        products.insert_one(product.toDBCollection())
        response = jsonify({
            'name' : name,
            'price' : price,
            'quantity' : quantity
        })
        return redirect(url_for('admin'))
    else:
        return notFound()
    
#Method put
@app.route('/edit/<string:product_name>', methods=['POST'])
def edit(product_name):
    products = db['products']
    name = request.form['name']
    price = request.form['price']
    quantity = request.form['quantity']

    if name and price and quantity:
        products.update_one({'name' : product_name}, {'$set' : {'name' : name, 'price' : price, 'quantity' : quantity}})
        return redirect(url_for('admin'))
    else:
        return notFound()
    
#Method Delete
@app.route('/delete/<string:product_name>')
def delete(product_name):
    products = db['products']
    products.delete_one({'name' : product_name})
    users_collection.delete_one({'username': product_name})
    return redirect(url_for('admin'))

#comprar    
@app.route('/buy/<product_name>', methods=['POST'])
def buy_product(product_name):
    # Obtener el producto de la base de datos
    products = db['products']
    product = products.find_one({'name': product_name})

    if product:
        # Restar 1 a la cantidad
        new_quantity = max(int(product['quantity']) - 1, 0)        

        # Actualizar la cantidad en la base de datos
        products.update_one({'name': product_name}, {'$set': {'quantity': new_quantity}})
    productsReceived = products.find()    
    return render_template('normal.html', products = productsReceived)  # Redirigir a la página principal


@app.route('/admin')
def admin():
    products = db['products']
    productsReceived = products.find()
    return render_template('admin.html', products = productsReceived)

@app.route('/normal')
def normal():
    return render_template('normal.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        tipo = 'admin'
        user_data = users_collection.find_one({'username': username, 'password': password, 'tipo': tipo})

        if user_data:
            user = User(username=username)
            login_user(user)
            return redirect(url_for('admin'))
        else:
            # Si no es un administrador, verifica si es un usuario normal
            tipo = 'normal'
            user_data = users_collection.find_one({'username': username, 'password': password, 'tipo': tipo})

            if user_data:
                user = User(username=username)
                login_user(user)
                return redirect(url_for('normal'))
            else:
                flash('Inicio de sesión fallido. Verifica tus credenciales', 'danger')

    return render_template('login.html')

# ...

@app.route('/gestorUsuario', methods=['POST'])
def addUsuario():
    if request.method == 'POST':
        # Obtén los datos del formulario
        username = request.form['username']
        password = request.form['password']

        if username and password:
            # Comprueba si el nombre de usuario ya existe en la base de datos
            existing_user = users_collection.find_one({'username': username})

            if existing_user:
                flash('El nombre de usuario ya existe', 'danger')
            else:
                # Inserta el nuevo usuario en la base de datos
                new_user = {
                    'username': username,
                    'password': password,
                    'tipo': 'normal'  # Define el tipo de usuario según tus necesidades
                }
                users_collection.insert_one(new_user)
                flash('Usuario creado exitosamente', 'success')

        else:
            flash('Nombre de usuario y contraseña son obligatorios', 'danger')

    # Redirige a la página de gestión de usuarios
    return redirect(url_for('gestor_usuario'))


# Método para editar un usuario en la base de datos
@app.route('/edit_usuario/<string:username>', methods=['POST'])
def editUsuario(username):
    # Verifica que el método de la solicitud sea POST
    if request.method == 'POST':
        # Obtén los datos del formulario
        new_username = request.form['new_username']
        new_password = request.form['new_password']

        if new_username and new_password:
            # Actualiza los datos del usuario en la base de datos
            users_collection.update_one({'username': username}, {'$set': {'username': new_username, 'password': new_password}})
            flash('Usuario actualizado exitosamente', 'success')
        else:
            flash('Nombre de usuario y contraseña son obligatorios', 'danger')

    # Redirige a la página de gestión de usuarios
    return redirect(url_for('gestor_usuario'))

@app.route('/delete/<string:username>', methods=['POST', 'DELETE'])
def deleteUsuario(username):
    users_collection.delete_one({'username': username})
    return redirect(url_for('gestor_usuario'))

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.errorhandler(404)
def notFound(error=None):
    message ={
        'message': 'No encontrado ' + request.url,
        'status': '404 Not Found'
    }
    response = jsonify(message)
    response.status_code = 404
    return response

if __name__ == '__main__':
    app.run(debug=True)
