use('tienda');

db.getCollection('usuarios').insertMany([
    {"_id":"181060","Contraseña":"nc4567","Nombre":"Astrid Boru Salazar","usuario":"Cliente"},
    {"_id":"181061","Contraseña":"nc4764","Nombre":"Jose Martinez Aguilar","usuario":"Administrador"},
    {"_id":"181062","Contraseña":"nc3865","Nombre":"Adrian Reyes Martinez","usuario":"Stakeholder"},
    {"_id":"181063","Contraseña":"nc3579","Nombre":"Eder Huerta Chavez","usuario":"Administrador"},
    {"_id":"181064","Contraseña":"nc5890","Nombre":"Monica Reyes Osorio","usuario":"Cliente"},
]);
db.getCollection('productos').insertMany([
    {"_id":"Producto0001","nombre":"Yoghurt Skyr Griego Coco","descripcion":"120 g","precio":12.89,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw46972bea/images/product/7501040075377_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0002","nombre":"Yoghurt Lala Zero", "descripcion":"Yoghurt saborizado","precio":35.99,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw8a756d20/images/product/7501020563696_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0003","nombre":"Margarina Sin Sal","descripcion":"90 gr","precio":20.99,"imagen":"https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw425a6004/images/product/8719200450486_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0004","nombre":"Crema Lala entera", "descripcion":"426ml","precio":25.99,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwa9da5609/images/product/7501020561906_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0005","nombre":"Media crema Lala", "descripcion": "250 ml","precio":16.50,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb4fc4398/images/product/7501020515299_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0006","nombre":"Zucaritas", "descripcion":"600 gr","precio":76.50,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw50ea582f/images/product/7501008057292_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0007","nombre":"Huevo blanco", "descripcion":"30 piezas","precio":76.90,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw0bfa77b7/images/product/7501008821008_A.jpg?sw=106&sh=106&sm=fit"},
    {"_id":"Producto0008","nombre":"Sopa Knorr forma de estrella", "descripcion":"95 gr","precio":18.60,"imagen": "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwdcab9d32/images/product/7501005129947_A.jpg?sw=106&sh=106&sm=fit"},
  ]);

db.getCollection('ventas').insertMany([
  {"_id":"nv001","producto":"Producto0001"},
  {"_id":"nv002","producto":"Producto0002"},
  {"_id":"nv003","producto":"Producto0004"},
  {"_id":"nv004","producto":"Producto0007-Producto0006"},
  {"_id":"nv005","producto":"Producto0008"},
]);