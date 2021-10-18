DROP TABLE if EXISTS users;
CREATE TABLE IF NOT EXISTS users
(
   id integer not null AUTO_INCREMENT,
   userName varchar(255) not null,
   password varchar(255) not null,
   email varchar(255) not null,
   usertype varchar(255),
   primary key(id)
);

insert into users(userName, password, email)
values('Ranga', 'A12345678','Ranga@gmail.com');

insert into users(userName, password, email)
values('Ravi', 'B12345678', 'Ravi@gmail.com');

insert into users(userName, password, email)
values('Julie', 'A12345678','Julie@Gmail.com');

insert into users(userName, password, email)
values('Steve', 'B12345678', 'Steve@gmail.com');

insert into users(userName, password, email)
values('Ava', 'B12345678', 'Ava@gmail.com');