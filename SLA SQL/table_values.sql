create database class;
use class;
create table place_depart(id int not null,name varchar(20) unique,course_detail varchar(20));
insert into place_depart values(1,'Hem','full stack'),(2,'Malai','full stack'),(3,'Dhanush','cloud comp'),(4,'saranya','data sci'),(5,'pooja','acounting'),(6,'prathi','acounting');
select * from place_depart;
select * from place_depart order by name;
select * from place_depart order by name desc;
select name from place_depart;
insert into place_depart values(null,'kamesh','advocate');
insert into place_depart values(7,null,'advocate');
insert into place_depart values(8,null,'js');



-- constraint is column level constraint it will restrict the row values
-- according to its types of constraint

-- not null constraint:
-- will accept the duplicates but will not accept the null values

-- unique constraint:
-- unique constraint will not allow duplicates but accept the null values

-- check constraint:
-- it ensure that the condition given using check condition is getting satisfied

create table car(carname varchar(20),price int check(price>=500000));
insert into car values('bmw',10000000);
insert into car values('bmw x6',499999);
insert into car values('bmw m2',500000);
select * from car;

-- default constraint: sets a value for a column is no  value provided upon insertion

create table usedcars(carname varchar(20),price int,location varchar(20)default 'chennai');
insert into usedcars values('bmw',10000000,default);
insert into usedcars values('bmw x6',499999,default);
insert into usedcars values('bmw m2',500000,'vellore');
select * from usedcars;

-- primary key dosnot allow duplicate data
create table employe(id int,name varchar(20),city varchar(20),primary key(id));
insert into employe values(1,'wolf','vellore');
insert into employe values(2,'crazy','salem');
insert into employe values(3,'hitler','chennai');
insert into employe values(4,'pikachu','vellore');
insert into employe values(5,'robert','salem');
select * from employe;

-- forgrin key
create table fore_table(fid int , fname varchar(10), foreign key(fid) references employe(id));
insert into fore_table values(1, 'wolf');
insert into fore_table values(2, 'crazy');
insert into fore_table values(3, 'hitler');
insert into fore_table values(4, 'pikachu');
insert into fore_table values(5, 'robert');
insert into fore_table values(6,'hema'); -- error bcz the data is not in parent table // it only shows parent data in child table
select *from fore_table;





