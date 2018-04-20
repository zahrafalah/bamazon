DROP DATABASE IF EXISTS bamazon;
-- Create a database called 'Bamazon' and switch into it --
CREATE database bamazon;

USE bamazon;
-- create a table called 'products' which will contain the store inventory -- 
CREATE TABLE products (
  ID INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department VARCHAR(20) not null,
  price DECIMAL(10,2),
  quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (id)
);
-- Insert data into 'the products' table --
INSERT INTO products (product_name, department, price, quantity)
values  ('Mouse Pad','Tech',8.99,100),
        ('Ibuprophen Tablets', 'Pharmacy', 4.95, 389),
        ('johnsons Shampoo', 'Cosmetics',11.75, 400),
        ('Addidas Shorts', 'Clothing', 17.88, 250),
        ('True Orange 100 Count', 'Grocery', 8.81, 700),
		    ('When Never Comes', 'Books', 4.99, 100),
        ('Viva Cacao Powder', 'Grocery', 10.99, 400),
        ('Godiva Chocolate', 'Grocery', 17.50, 225),
        ('First Aid Kit', 'Pharmacy', 3.25, 550),
        ('Wireless Earphones', 'Electronics', 12.5, 476),
        ('Yoga Mat', 'Sports', 12.75, 150),
        ('Headphone Jack Adapter', 'Electronics', 7.69, 120),
        ('Gloridea Thermometer', 'Children', 24.99, 223),
        ('Aspen Cat Bed', 'Pet', 15.94, 157),
        ('Pedigree Wet Dog Food', 'Pet', 8.87, 163),
        ('Wireless Earphones', 'Electronics', 2.75, 476),
        ('Shemrock Milk', 'Grocery', 2.50, 200),        
		    ('Gal Trash Bags', 'Grocery', 5.99, 300),
        ('Organic Almond Milk', 'Grocery', 2.50, 200),
        ('Mens Headband', 'Sports', 5.35, 90),
        ('Purell Hand Sanitizer', 'Grocery', 12.99, 575),		
		    ('Dalix Plain Cap', 'Clothing', 5.35, 156),
		    ('Crest Toothpaste', 'Personal Care', 1.2, 1000)
