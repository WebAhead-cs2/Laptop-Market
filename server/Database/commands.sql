BEGIN;

DROP TABLE IF EXISTS users, products, cart, orders, payment;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
   email VARCHAR(255),
   address VARCHAR(15),
   password VARCHAR(255),
   status VARCHAR(255),
   phonenumber VARCHAR(255)
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  img VARCHAR(255), 
  -- color VARCHAR(255),
  price VARCHAR(255)
  -- model VARCHAR(255),
  -- category VARCHAR (255)
);

CREATE TABLE cart(
  id SERIAL PRIMARY KEY,
  -- order_id INTEGER REFERENCES orders(id)
  user_id INTEGER REFERENCES users(id),
  total_price VARCHAR(255)
-- list trxt ot JDON
  -- product_id REFERENCES products(id)

 );
CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  user_id  INTEGER REFERENCES users(id),
  payment_date VARCHAR(255),
  -- cart_id INTEGER REFERENCES cart(id),
  -- shipping_address  VARCHAR(255),
  -- product_id INTEGER REFERENCES products(id),
   quantity INTEGER
  cart TEXT
);




CREATE TABLE payment(
  session_id SERIAL PRIMARY KEY,
  cvv VARCHAR(255),
  export_date VARCHAR(255),
  id_number VARCHAR(255),
  card_number VARCHAR(255),
  cart_id INTEGER REFERENCES cart(id),
  user_id INTEGER REFERENCES users(id)
);

-- CREATE TABLE favorite(
--   product_id REFERENCES products(id),
--   user_id REFERENCES users(id)
-- );

-- CREATE TABLE reviews(
--   user_id INTEGER REFERENCES users(id),
--   content TEXT,
--   published VARCHAR(255)
-- );


INSERT INTO products (name, description, price, img) VALUES ('MacBook Pro', '15-inch laptop with a Retina display, 8th generation Intel Core i7 processor, and 16GB of RAM', '1499.99', 'https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1000');
INSERT INTO products (name, description, price, img) VALUES ('Dell XPS 13', 'Ultra-portable 13-inch laptop with a 1080p touch screen, 10th generation Intel Core i5 processor, and 8GB of RAM', '999.99', 'https://www.manlylaptops.com.au/assets/thumbL/MLLAP98073.jpg?20200909153640');
INSERT INTO products (name, description, price, img) VALUES ('Lenovo ThinkPad X1 Carbon', '14-inch business laptop with a 1080p display, 11th generation Intel Core i7 processor, and 16GB of RAM', '1399.99', 'https://img.zap.co.il/pics/8/3/9/1/66691938c.gif');
INSERT INTO products (name, description, price, img) VALUES ('HP Spectre x360', '13-inch convertible laptop with a 4K OLED display, 10th generation Intel Core i7 processor, and 16GB of RAM', '1299.99', 'https://www.mall.cz/i/48123977/1000/1000');
INSERT INTO products (name, description, price, img) VALUES ('Asus ROG Zephyrus', 'Gaming laptop with a 15-inch 1080p display, 9th generation Intel Core i7 processor, and 32GB of RAM', '1999.99', 'https://cashcow-cdn.azureedge.net/images/26d42126-c06a-49b7-8b50-ab61d7d51416.jpg');
INSERT INTO products (name, description, price, img) VALUES ('Acer Aspire 5', 'Budget laptop with a 15-inch 1080p display, 8th generation Intel Core i5 processor, and 8GB of RAM', '499.99', 'https://images.acer.com/is/image/acer/aspire-5-a515-43-sv-01a-1?$Product-Cards-XL$');
INSERT INTO products (name, description, price, img) VALUES ('Razer Blade', 'Thin and light gaming laptop with a 14-inch 1080p display, 10th generation Intel Core i7 processor, and 16GB of RAM', '1799.99', 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Razer_Blade_15_Advanced_Model_2020.jpg');
INSERT INTO products (name, description, price, img) VALUES ('Microsoft Surface Laptop', '13-inch laptop with a touchscreen and a 3:2 aspect ratio, 10th generation Intel Core i5 processor, and 8GB of RAM', '999.99', 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LiWr?ver=4aed');
INSERT INTO products (name, description, price, img) VALUES ('Google Pixelbook Go', 'Chrome OS laptop with a 13-inch 1080p display, 8th generation Intel Core i5 processor, and 8GB of RAM', '799.99', 'https://lh3.googleusercontent.com/cewixHQrBsI-iviE4qPNPLppaYuNTccxIBTi9v2XusjhRvp-UdBpOAYr78exyrJPM5lyFjWHnEQFBSUyJuSSCd3sI-UGN67G8Nbi=s2048');
INSERT INTO products (name, description, price, img) VALUES ('Samsung Notebook 9', 'Ultra-light laptop with a 13-inch 1080p display, 8th generation Intel Core i7 processor, and 16GB of RAM','1299.99', 'https://images.anandtech.com/doci/13721/PR%20NT950SBE_004_R-Perspective_Blue.jpg');
COMMIT;