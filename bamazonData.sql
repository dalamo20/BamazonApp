DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(20) NULL,
  department VARCHAR(20) NULL,
  price DECIMAL(10,2) NULL,
  stock INT NULL,
  PRIMARY KEY (id)
);

-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)



INSERT INTO products (product, department, price, stock)
VALUES ("Blood & Bone", "Movies", 10.00, 12);

INSERT INTO products (product, department, price, stock)
VALUES ("50 Shades of Gray", "Books", 15.00, 25);

INSERT INTO products (product, department, price, stock)
VALUES ("Beats by Dre", "Electronics", 200.00, 5);

INSERT INTO products (product, department, price, stock)
VALUES ("Echo Plus", "Electronics", 150.00, 8);

INSERT INTO products (product, department, price, stock)
VALUES ("The Hobbit", "Books", 12.00, 10);

INSERT INTO products (product, department, price, stock)
VALUES ("Halo 3", "Games", 60.00, 2);

INSERT INTO products (product, department, price, stock)
VALUES ("Super Mario Bros.", "Games", 15.00, 1);

INSERT INTO products (product, department, price, stock)
VALUES ("Conker's Bad Fur Day", "Games", 78.00, 2);

INSERT INTO products (product, department, price, stock)
VALUES ("Phantom of the Opera", "Movies", 6.00, 4);

INSERT INTO products (product, department, price, stock)
VALUES ("Kazoo", "Instruments", 8.00, 103);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);