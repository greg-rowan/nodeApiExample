create database TESTDB;
GO
use TESTDB;

create table people(PersonId int Primary key, Name nvarchar(50));
insert into people values (1, 'julie');
insert into people values (2, 'stan');
select * from people;

create table Products(ProductID int Primary key, ProductName varchar(50), ProductPrice decimal(18,2));
insert into Products values (1, 'Polo Shirt', 29.00);
insert into Products values (2, 'Shorts', 49.99);
insert into Products values (3, 'Socks', 4.99);
select * from Products;

