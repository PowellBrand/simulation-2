--69C-F
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

insert into newListing (propName, description, price, address, city, state, zip)
values
($1, $2, $3, $4, $5, $6, $7);