<template>
    <h2>Productos Disponibles</h2>
    <div class="productos">
    
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
  template{
    width: 100vh;
    height: auto;
  }
  .productos {
    display: flex;
    justify-content: space-around;
  flex-flow: row wrap;
  font-size: 22px;
    
  }
  
  .producto {
    border: 3px solid #2d34b9;
    border-radius: 40px;
    padding: 90px;
    margin: 10px;
    text-align: center;
  }
  
  button {
    background-color: #146fd0;
    color: white;
    border:outset;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  </style>
  