--67C
create table auth (
id serial primary key,
userName varchar(20),
password varchar(15)
);

insert into auth (userName, password)
values
('Brandon', 12345)

create table newListings (
id serial primary key,
propName varchar(20),
description text,
price decimal,
address text,
city varchar(20),
state varchar(2),
zip integer
);

insert into newListings (propName, description, price, address, city, state, zip)
values
('test1', 'This is the description', 100000, '123 fake street', 'heber', 'UT', 84000);