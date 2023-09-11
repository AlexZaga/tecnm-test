<template>
    <div class="productos">
      <h2>Productos Disponibles</h2>
      <div v-for="(producto, index) in productos" :key="index" class="producto">
        <img :src="producto.imagen" :alt="producto.nombre" />
        <h3>{{ producto.nombre }}</h3>
        <p>{{ producto.descripcion }}</p>
        <p>Precio: ${{ producto.precio }}</p>
        <button @click="agregarAlCarrito(producto)">Agregar al Carrito</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
        {
          nombre: 'Salchicha de Pavo',
          descripcion: 'Salchicha de Pavo Lala 100 de 500g',
          precio: 65.99,
          imagen: 'https://http2.mlstatic.com/D_NQ_NP_985811-MLU70711473394_072023-O.webp',
        },
        {
          nombre: 'Carne de res para hamburguesa',
          descripcion: 'Carne De Res Sukarne Hamburguesa 720g',
          precio: 92.99,
          imagen: 'https://http2.mlstatic.com/D_NQ_NP_712189-MLM49360907592_032022-O.webp',
        },
        {
          nombre: 'Cebolla En Trozos',
          descripcion: 'Cebolla En Trozos 470g Mccormick',
          precio: 239.99,
          imagen: 'https://http2.mlstatic.com/D_NQ_NP_632029-MLM49838380926_052022-V.webp',
        },
        {
          nombre: 'Pimiento Rojo Triturado',
          descripcion: 'Pimiento Rojo Triturado 368g Mccormick Gourmet Sazonador',
          precio: 169.99,
          imagen: 'https://http2.mlstatic.com/D_NQ_NP_919425-MLM53790177419_022023-V.webp',
        },
        {
          nombre: 'Sopa Maruchan Ramen',
          descripcion: 'Sopa Maruchan Ramen Sabor Camaron, Limón Y Habanero 85 Gr',
          precio: 6.99,
          imagen: 'https://http2.mlstatic.com/D_NQ_NP_805125-MLM47161873231_082021-V.webp',
        },
        ],
      };
    },
    methods: {
      agregarAlCarrito(producto) {
        this.$emit('agregarAlCarrito', producto);
      },
    },
  };
  </script>
  
  <style scoped>
  .productos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .producto {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    text-align: center;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  