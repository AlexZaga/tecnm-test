<template>
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        <li v-for="producto in carrito" :key="producto.id">
          {{ producto.nombre }} - ${{ producto.precio.toFixed(2) }}
        </li>
      </ul>
      <p>Total: ${{ totalVenta.toFixed(2) }}</p>
      <button @click="simularVenta">Venta</button>
      <button @click="irATienda">Volver a la Tienda</button>
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
        return this.carrito.reduce((total, producto) => total + producto.precio, 0);
      },
    },
    methods: {
      simularVenta() {
        // Simula la venta (puedes agregar más lógica aquí)
        this.carrito = [];
        alert('Venta realizada con éxito.');
      },
      irATienda() {
        this.$router.push('/');
      },
    },
  };
  </script>
  