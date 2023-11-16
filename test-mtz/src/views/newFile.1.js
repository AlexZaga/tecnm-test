/* __placeholder__ */
export default (await import('vue')).defineComponent({
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
}, n,
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
precio: 16.5,
imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb4fc4398/images/product/7501020515299_A.jpg?sw=106&sh=106&sm=fit',
},
{
nombre: 'Zucaritas',
descripcion: '600 gr',
precio: 76.5,
imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw50ea582f/images/product/7501008057292_A.jpg?sw=106&sh=106&sm=fit',
},
{
nombre: 'Huevo blanco',
descripcion: '30 piezas',
precio: 76.9,
imagen: 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw0bfa77b7/images/product/7501008821008_A.jpg?sw=106&sh=106&sm=fit',
},
{
nombre: 'Sopa Knorr forma de estrella',
descripcion: '95 gr',
precio: 18.6,
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
});
