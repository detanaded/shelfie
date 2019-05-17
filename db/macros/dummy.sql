insert into products(
  id serial primary key,
  name varchar(25),
  price integer,
  img text
)
values(
  ${name},
  ${price},
  ${img}
);