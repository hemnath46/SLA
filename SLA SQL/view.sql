-- views:
-- views means a virtual table
-- view used to restrict the particular data to other users.
-- more then one views can be created for a table
-- view can able to create,update and delete
-- views cannot able to be inserted

-- syntax:
-- select views viewsname as select column,column2... from tablename;
-- select * from viewname;

create database view;
use view;
create table rec(id int,name varchar(20),age int,location varchar(10),marks int,course varchar(20));
insert into rec values(1,'Hemnath',23,'Vellore',90,'Java'),(2,'Pooja',22,'Vellore',85,'Accounts'),
(3,'Prathi',23,'Vellore',90,'Accounts'),(4,'Kamesh',22,'Vellore',88,'Law'),(5,'Manoj',23,'Vellore',90,'Law');
select * from rec; -- employee access

create view v1 as select id,name,marks,course from rec; -- student access
select * from v1;

create view v2 as select name,course from rec;
select * from v2;

update v2 set name='Hems' where name='Hemnath';
select * from v2;

delete from v2 where name='Pooja';
-- it delete the data in view and also it affect the main table

drop view v2;
-- it drop tha v2 table but not affect the main table

-- union and union all
create table student(id int,name varchar(20),phoneno bigint,age int);
insert into student values(1,'hema',34567897890,23),(2,'pooja',234567898567,22),(3,'prathi',12345678909,23);
select * from student;

create table teacher(id int,name varchar(20),gender char(1),age int);
insert into teacher values(4,'kamesh','M',22),(4,'dhanush','M',23),(5,'manoj','M',23);
select * from teacher;

-- union will given only unique values
select age from student union select age from teacher; -- union will combine both table data but not allow duplicates
select age from student where age>22 union select age from teacher;
-- unoin all include duplicates values
select age from student where age>=22 union all select age from teacher; -- union all will combine both the table data also include duplicates

-- task for view
create table placement(id int,name varchar(10),gender char(1),course varchar(10),phoneno bigint,eligible varchar(10));
insert into placement values(1,'hems','M','fullstack',23456789,'yes'),(2,'pooja','F','fullstack',09876543,'no'),(3,'malai','F','fullstack',09876543,'yes'),
(1,'kamesh','M','fullstack',23456789,'no'),(1,'prathi','F','fullstack',2345678908,'yes');
select * from placement;
create view recruit as select id,name,course,eligible from placement;
select * from recruit;

