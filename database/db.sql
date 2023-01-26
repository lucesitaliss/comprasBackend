CREATE DATABASE cart;

CREATE TABLE statuses (
    id_state SERIAL PRIMARY KEY,
    name_state VARCHAR (255) 
);

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255),
    state_id integer REFERENCES statuses (id_state)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255),
    category_id integer REFERENCES categories(category_id),
    state_id integer REFERENCES statuses (id_state)
    checked boolean
    
);


CREATE TABLE products_seleted(
    cart_id SERIAL PRIMARY KEY,
    products_select jsonb
); 

CREATE TABLE rol(
    id_rol SERIAL PRIMARY KEY,
    rol VARCHAR(255) UNIQUE
);

CREATE TABLE users(
    id_user SERIAL PRIMARY key,
    name_user VARCHAR(255) UNIQUE,
    rol_id integer REFERENCES rol(id_rol),
    password  VARCHAR(255)
);

CREATE TABLE cart(
    cart_id SERIAL PRIMARY KEY,
    product_id integer REFERENCES products (product_id),
    selected boolean
);

ALTER TABLE cart ADD COLUMN selected boolean default false;



CREATE TABLE history_cart (
    id_historycart SERIAL PRIMARY KEY,
    product_id integer REFERENCES products (product_id),
    fecha DATE
);





 ***Insertar registros***
 
 INSERT INTO statuses (name_state)
 VALUES ('activo');
 INSERT INTO statuses (name_state)
 VALUES ('inactivo');

 
 INSERT INTO cart (product_id)
 values (2);


INSERT INTO history_cart (product_id, fecha)
select product_id,  current_timestamp from cart;

****Agregar colomnas****

ALTER TABLE products ADD COLUMN checked boolean default false;
ALTER TABLE products DROP COLUMN checked; 

*****modificar registros***
 'UPDATE products SET product_name = nuevoNombre WHERE product_id =id;

Querys

SELECT * FROM categories;

Todas las categorias y productos Activos
 SELECT categories.category_id,
  categories.category_name, 
  products.product_name,
  products.product_id,
  products.category_id,
  cart.product_id 
  FROM categories
  JOIN products ON categories.category_id = products.category_id
  JOIN cart ON cart.product_id = products.product_id;

Producto de una categoria
SELECT * 
FROM products
JOIN categories ON categories.category_id = products.category_id
where categories.category_id =1;



para cuando se necesita poner un campo json

 const cartSeleted = req.body
    console.log(JSON.stringify(cartSeleted))
    const result = await pool.query(
      `INSERT INTO products_seleted (products_select) SELECT * FROM jsonb_array_elements($1::jsonb)`,
      [JSON.stringify(cartSeleted)],
    )


insertar registreos

INSERT INTO categories (category_name, state_id) VALUES (Limpieza, 1);