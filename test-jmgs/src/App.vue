<template>
  <div class="app">
    <header>
      <h1>Tienda InterProcSys</h1>
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
  background-color: #333;
  color: white;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.cart {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
}

.cart-link {
  text-decoration: none;
  color: white;
}

nav {
  background-color: #333;
  color: white;
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
