<template>
  <div class="app">
    <header>
      <h1>Tienda</h1>
      <div class="cart">
        <span>Carrito:</span>
        <span>{{ carrito.length }}</span>
        <span>Total: ${{ totalVenta.toFixed(2) }}</span>
      </div>
      <div v-if="usuario">
        <span>Bienvenido, {{ usuario }}</span>
        <button @click="cerrarSesion">Cerrar Sesión</button>
      </div>
      <div v-else>
        <button @click="mostrarLogin">Iniciar Sesión</button>
      </div>
    </header>
    <main>
      <section class="productos">
        <div v-for="(producto, index) in productos" :key="index" class="producto">
          <img :src="producto.imagen" :alt="producto.nombre" />
          <h2>{{ producto.nombre }}</h2>
          <p>{{ producto.descripcion }}</p>
          <p>Precio: ${{ producto.precio.toFixed(2) }}</p>
          <button @click="agregarAlCarrito(producto)">Agregar al Carrito</button>
        </div>
      </section>
    </main>
    <aside class="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        <li v-for="(item, index) in carrito" :key="index">
          {{ item.nombre }} - ${{ item.precio.toFixed(2) }}
          <button @click="eliminarDelCarrito(index)">Eliminar</button>
        </li>
      </ul>
      <button @click="realizarVenta">Realizar Venta</button>
    </aside>
    <div v-if="mostrarFormularioLogin" class="login-form">
      <h2>Iniciar Sesión</h2>
      <input v-model="nombreUsuario" placeholder="Nombre de Usuario" />
      <button @click="iniciarSesion">Iniciar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
      {
          nombre: 'Yoghurt Skyr Griego Coco',
          descripcion: '120 g',
          precio: 12.89,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw46972bea/images/product/7501040075377_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Yoghurt Lala Zero',
          descripcion: 'Yoghurt saborizado',
          precio: 35.99,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw8a756d20/images/product/7501020563696_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Margarina Sin Sal',
          descripcion: '90 gr',
          precio: 20.99,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw425a6004/images/product/8719200450486_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Crema Lala entera',
          descripcion: '426ml',
          precio: 25.99,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwa9da5609/images/product/7501020561906_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Media crema Lala',
          descripcion: '250 ml',
          precio: 16.50,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb4fc4398/images/product/7501020515299_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Zucaritas',
          descripcion: '600 gr',
          precio: 76.50,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw50ea582f/images/product/7501008057292_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Huevo blanco',
          descripcion: '30 piezas',
          precio: 76.90,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw0bfa77b7/images/product/7501008821008_A.jpg?sw=106&sh=106&sm=fit',
        },
        {
          nombre: 'Sopa Knorr forma de estrella',
          descripcion: '95 gr',
          precio: 18.60,
          imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwdcab9d32/images/product/7501005129947_A.jpg?sw=106&sh=106&sm=fit',
        },
      ],
      carrito: [],
      mostrarFormularioLogin: false,
      nombreUsuario: '',
      usuario: null,
    };
  },
  computed: {
    totalVenta() {
      return this.carrito.reduce((total, item) => total + item.precio, 0);
    },
  },
  methods: {
    agregarAlCarrito(producto) {
      this.carrito.push(producto);
    },
    eliminarDelCarrito(index) {
      this.carrito.splice(index, 1);
    },
    realizarVenta() {
      alert(`¡Venta realizada con éxito! Total: $${this.totalVenta.toFixed(2)}`);
      this.carrito = [];
    },
    mostrarLogin() {
      this.mostrarFormularioLogin = true;
    },
    iniciarSesion() {
      this.usuario = this.nombreUsuario;
      this.mostrarFormularioLogin = false;
    },
    cerrarSesion() {
      this.usuario = null;
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Eras, Bold;
  font-size: 20px;
}

header {
  background-color: #FF5733;
  color: white;
  padding: 34px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.logo {
  max-height: 30px;
}

.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 30px;
}

main {
  padding: 20px;
}

.productos {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.producto {
  border: 1px solid #A2A2A1;
  padding: 5px;
  margin: 5px;
  text-align: center;
}

button {
  background-color: #0059FF;
  color: white;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0059FF;
}

.carrito {
  margin-top: 20px;
  background-color: #A8A8A8;
  padding: 20px;
  width: 100%;
  max-width: 990px;
  text-align: center;
}

.carrito h2 {
  font-size: 25px;
  margin-bottom: 10px;
}

.carrito ul {
  list-style: none;
  padding: 0;
}

.carrito li {
  margin-bottom: 10px;
}

.carrito button {
  background-color: #0059FF;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
}

.carrito button:hover {
  background-color: #45a049;
}

.login-form {
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 25px;
  max-width: 490px;
}

.login-form h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.login-form input {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
}

.login-form button {
  background-color: #0059FF;
  color: white;
  border: none;
  padding: 5px 16px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}
</style>