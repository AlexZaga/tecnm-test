use('tienda');
db.getCollection('productos').insertMany([
  {"_id":"P0001","nombre":"Salchicha de Pavo","descripcion":"Salchicha de Pavo Lala 100 de 500g","precio":65.99,"imagen": "https://http2.mlstatic.com/D_NQ_NP_985811-MLU70711473394_072023-O.webp"},
  {"_id":"P0002","nombre":"Carne de res para hamburguesa", "descripcion":"Carne de Res Sukarne Hamburguesa 720g","precio":92.99,"imagen": "https://http2.mlstatic.com/D_NQ_NP_712189-MLM49360907592_032022-O.webp"},
  {"_id":"P0003","nombre":"Cebolla En Trozos","descripcion":"Cebolla En Trozos 470g Mccormick","precio":239.99,"imagen":"https://http2.mlstatic.com/D_NQ_NP_632029-MLM49838380926_052022-V.webp"},
  {"_id":"P0004","nombre":"Pimiento Rojo Trituradoo", "descripcion":"Pimiento Rojo Triturado 368g Mccormick Gourmet Sazonador","precio":169.99,"imagen": "https://http2.mlstatic.com/D_NQ_NP_919425-MLM53790177419_022023-V.webp"},
  {"_id":"P0005","nombre":"Sopa Maruchan Ramen", "descripcion":"Sopa Maruchan Ramen Sabor Camaron, Limón Y Habanero 85 Gr","precio":6.99,"imagen": "ttps://http2.mlstatic.com/D_NQ_NP_805125-MLM47161873231_082021-V.webp"},
]);
db.getCollection('usuarios').insertMany([
    {"_id":"GoGuJu01","Contraseña":"Juan40","Nombre":"Juan Manuel Gonzalez Gutierrez","TipoUsuario":"Administrador"},
    {"_id":"BaGoJa01","Contraseña":"Jannet30","Nombre":"Jannet Barragan Gonzalez","TipoUsuario":"Administrador"},
    {"_id":"OlCeSc01","Contraseña":"Scarlet25","Nombre":"Scarlet Olguin Cervantes","TipoUsuario":"Stakeholder"},
    {"_id":"HeCaGu01","Contraseña":"Guadalupe26","Nombre":"Guadalupe Hernandez Casiano","TipoUsuario":"Cliente"},
    {"_id":"SoMeBl01","Contraseña":"Blanca42","Nombre":"Blanca Janeth Soto Mendiola","TipoUsuario":"Cliente"},
]);
db.getCollection('ventas').insertMany([
  {"_id":"V0001","Producto":"P0003"},
  {"_id":"V0002","Producto":"P0004-P0001"},
  {"_id":"V0003","Producto":"P0003"},
  {"_id":"V0004","Producto":"P0001-P0004-P0005"},
  {"_id":"V0005","Producto":"P0005"},
]);