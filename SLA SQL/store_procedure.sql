-- Stored Procedures:
-- 1.stored procedures means we are going to work with the stored data inside the database where 
-- we are going to fetch the data easily and also code re-useability
-- 2.it reduces the network traffic 
-- 3.it gives the centralized access in business point of view
-- 4.inside the stored procedures we can use if statement ,if else statement ,loop, switch, etc,..
-- 5.it gives the business owners to secure the data

-- syntax for stored procedures:
-- create procedure procedure name()
-- begin
-- sequence of sql statements select * from table
-- end
-- call procedure name()

create database records;
use records;
create table store(id int, name varchar(10), salary int);
insert into store values(1, 'sindhu', 45000);
insert into store values(2, 'harish', 24100);
select * from store;

delimiter //
create procedure fun()
begin
select * from store;
end //
delimiter ;
call fun();


create database storeprocedure;
use storeprocedure;
create table customers(id int,name varchar(10),team varchar(10),country varchar(20));
insert into customers values(1,'hemnath','hitlergang','india'),(2,'ari','gameover','german'),(3,'barath','gameover','italy'),(4,'vicky','tamilas','america');
select * from customers;
-- drop table customer;

delimiter $$
create procedure func(in p_country varchar(20))
begin
select name , team from customers
where country=p_country;
end $$
delimiter ;
call func('india');


delimiter //
create procedure countcountry (in p_country varchar(20))
begin 
select count(*) as total from customers where country=p_country;
end //
delimiter ;
call countcountry('india');

-- add data by using procedure
delimiter ??
create procedure addcustomer(
	in p_id int,
	in p_customername varchar(20),
    in p_team varchar(20),
    in p_country varchar(20)
)
begin
	insert into customers(id,name,team,country)
    values(p_id,p_customername,p_team,p_country);
end ??
delimiter ;
call addcustomer(5,'malai','kuppa','korea');
select * from customers;
-- drop procedure addcustomer


-- delete data by using procedure
delimiter //
create procedure deletecustomersbycountry(in p_country varchar(20))
begin
delete from customers
where country=p_country;
end //
delimiter ;
call deletecustomersbycountry('korea');
select * from customers;

-- Out parameter: (externally returns something with the help of select and aggregate functions)
-- the value of an out parameter can be changed inside the procedure and it returns new values passed back when the function is called.
-- an out parameter is used to pass a parameter as output or display like the select operator , but implicitly (through a set value)

delimiter //
create procedure getcustomercountybyteam(in p_team varchar(10), out p_count int)
begin
select count(team) into p_count from customers where team = p_team;
end //
delimiter ;
call getcustomercountybyteam( 'hitlergang', @team_count);
select @team_count as total_customers;
select * from customers;


delimiter //
create procedure disp_max(OUT highestid int)
begin
select max(id) into highestid from customers;
end //
delimiter ;
call disp_max(@p);
select @p as maximum_customer;

drop procedure disp_max;
