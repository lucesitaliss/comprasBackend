CREATE DATABASE cart;

CREATE TABLE statuses (
    state_id SERIAL PRIMARY KEY,
    state_name VARCHAR (255) 
);

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255),
    state_id integer REFERENCES statuses (state_id)
);


CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255),
    category_id integer REFERENCES categories(category_id),
    state_id integer REFERENCES statuses (state_id),
    checked boolean
    
);

CREATE TABLE users(
    user_id SERIAL PRIMARY key,
    user_name VARCHAR(255) UNIQUE,
    password  VARCHAR(255)
);

CREATE TABLE cart(
    cart_id SERIAL PRIMARY KEY,
    product_id integer REFERENCES products (product_id),
    selected boolean default false
);

***Insertar registros***
 
 INSERT INTO statuses (state_name)
 VALUES ('activo');
 INSERT INTO statuses (state_name)
 VALUES ('inactivo');
