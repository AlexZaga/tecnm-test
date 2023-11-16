<template>
   <div class="contenedor">
  <div class="app">
    <header>
      
        <img v-bind:src="require('C:/Users/Antonio/Desktop/tecnm-test/test-mtz/imagen/1.png')" alt="">
      
    
      <h1>Tienda en linea </h1>
      
      <router-link to="/carrito" class="cart-link">
        <div class="cart">
          <span>Carrito: {{ carrito.length }}</span>
          <span>Total: ${{ totalVenta }}</span>
        </div>
      </router-link>
    </header>
    <nav>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/carrito">Carrito</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      carrito: [],
    };
  },
  computed: {
    totalVenta() {
      return this.carrito.reduce((total, item) => total + item.precio, 0);
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
  font-family: Arial, sans-serif;
}

header {
  background-color: #ffb948;
  color: white;
  padding: 10px;
  position: center;
  width: 100%;
  height: 410px;
  display: flex;
  justify-content: space-between;
}

.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 50px;
}

.cart-link {
  text-decoration: none;
  color: rgb(249, 249, 249);
  
}

nav {
  background-color: #000000;
  color: rgb(234, 49, 49);
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

nav a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration:solid;
  background: rgb(42, 57, 142);;
  opacity:calc(45%);
}
h1 { 
    font-size: 750% 
  }

  .contenedor {
  /* Estilo de fondo con la imagen */
  background-image: url('C:/Users/Antonio/Desktop/tecnm-test/test-mtz/imagen/3.jpg'); /* Ajusta la ruta según la ubicación de tu imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Estilos adicionales si es necesario */
  color: rgb(0, 0, 0);
  padding: 0px;
  background-attachment: fixed;
}
</style>
