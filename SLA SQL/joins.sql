-- joins:
-- it means which is used to combine 2 or more tables with the based on common cloumn values.

-- rules for joins:
-- 1.common cloumn name must be their.
-- 2.datatype must be same for both the tables.

-- types of joins:
-- 1.inner join
-- common values will be displayed in both the tables

-- 2.full outer join:
-- right outer join
-- it will display all records in the right side table and matched records in the
-- left outer join
-- full outer join (with the help of union can do it)
-- both the table records with uncommon values will be shown.

create database joins;
use joins;
CREATE TABLE airports (
   ID INT NOT NULL,
   NAME VARCHAR (20) NOT NULL,
   AGE INT NOT NULL,
   ADDRESS CHAR (25),
   SALARY DECIMAL (18, 2),       
   PRIMARY KEY (ID)
);

INSERT INTO airports VALUES
(1, 'Ramesh', 32, 'Ahmedabad', 2000.00 ),
(2, 'Khilan', 25, 'Delhi', 1500.00 ),
(3, 'Kaushik', 23, 'Kota', 2000.00 ),
(4, 'Chaitali', 25, 'Mumbai', 6500.00 ),
(5, 'Hardik', 27, 'Bhopal', 8500.00 ),
(6, 'Komal', 22, 'Hyderabad', 4500.00 ),
(7, 'Muffy', 24, 'Indore', 10000.00 );


CREATE TABLE nationalairports (
   OID INT NOT NULL,
   DATE VARCHAR (20) NOT NULL,
   airport_ID INT NOT NULL,
   AMOUNT DECIMAL (18, 2)
);
select * from airports;
select * from nationalairports;

INSERT INTO nationalairports VALUES
(102, '2009-10-08 00:00:00', 3, 3000.00),
(100, '2009-10-08 00:00:00', 3, 1500.00),
(101, '2009-11-20 00:00:00', 2, 1560.00),
(103, '2008-05-20 00:00:00', 4, 2060.00);

SELECT * FROM airports INNER JOIN nationalairports ON airports.ID = nationalairports.airport_ID; -- return common values
-- select * from airports a inner join nationalairports n on a.id=n.airport_id;
SELECT ID, NAME, AMOUNT, DATE FROM airports LEFT JOIN nationalairports ON airports.ID = nationalairports.airport_ID;

select * from airports right join nationalairports on airports.ID = nationalairports.airport_ID;


select * from nationalairports;
select * from airports;


SELECT OID, airport_ID,name FROM nationalairports right JOIN airports ON airports.ID = nationalairports.airport_ID;


-- LIMIT clause is used to specify the no of rows you want to return from your query.
-- syntax: select col1,col2 fromt tablename limit number;

select * from airports limit 2;
select * from airports order by name desc limit 3;

drop table custi;
-- index:

create table custi(customerid int,first_name varchar(10) primary key,last_name varchar(10) unique,referral_id int,email varchar(10));
insert into custi values(1,'frey','fish',null,'frey@g.com');
insert into custi values(2,'lary','bobster',1,'bo@g.com');
insert into custi values(3,'bubble','bass',2,'bass@g.com');
insert into custi values(4,'puppy','puff',3,'puf@g.com');
insert into custi values(5,'pearl','krabs',null,'krab@g.com');

select * from custi;
show index from custi;
show index from airports;

create index last_name_indx on custi (last_name);

show indexes from custi;
select * from custi where last_name ='puff';