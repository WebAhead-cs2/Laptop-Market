BEGIN;

--DROP TABLE IF EXISTS users, products ;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
   email VARCHAR(255),
   address VARCHAR(15),
   password Varchar(255),
   status VARCHAR(255),
   phonenumber VARCHAR(255)
);

CREATE TABLE products(
  
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  brand VARCHAR(255),
  img VARCHAR(255), 
  color VARCHAR(255),
  price VARCHAR(255),
  model VARCHAR(255)

);
CREATE TABLE cart(
  id SERIAL PRIMARY KEY,
  user_id REFERENCES users(id),
  total_price VARCHAR(255),
  quantity  INTEGER,
  product_id REFERENCES products(id)

);
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  user_id  INTEGER REFERENCES users(id),
  order_date VARCHAR(255),
  cart_id INTEGER REFERENCES cart(id),
product_id INTEGER REFERENCES products(id)
   
);
CREATE TABLE payment(
  session_id SERIAL PRIMARY KEY,
  cvv VARCHAR(255),
  export_date (255),
  id_number VARCHAR(255),
  card_number VARCHAR(255)
);
CREATE TABLE favorite(
  
  product_id REFERENCES products(id),
  user_id REFERENCES users(id)

);
CREATE TABLE reviews(
  
  user_id INTEGER REFERENCES users(id),
  content TEXT,
  published VARCHAR(255)
  
);

COMMIT;