-- Triggers:
-- A trigger is a special type of stored procedure that automatically runs when an event occurs in the database server.
-- in triggers also we have set of sequence statements 
-- any changes or modifications made in database triggers are executed.

-- example:
-- new data is getting inserted in a emp table we need to send a
-- welcome email
-- 2,order purchase confirmation email has to be done.

-- types of triggers:
-- DML Trigger (insert,update,delete)
-- DDL Trigger (create,alter,drop)
-- LOGON Trigger (user session)

create database goo;
use goo;
create table passengers(name varchar(10),id int,address varchar(10),
chargers int, primary key (id));

select * from passengers;

insert into passengers values('lalith',459,'goa',5000);
insert into passengers values('ashwin',460,'jammu',19000);
insert into passengers values('anjali',461,'manali',41000);
insert into passengers values('preethi',462,'cochin',3200);
insert into passengers values('prathap',463,'srinagar',6500);
insert into passengers values('jaswanth',464,'swiss',3500);

-- syntax for trigger creation:
-- create trigger triggername 
-- before/after 
-- insert/update/delete from table name
-- for each row existing column=new column 


create trigger flights
before insert 
on passengers 
for each row 
set new .chargers=new.chargers-2000;

-- DROP trigger IF EXISTS flights;

insert into passengers values ('jameer',744,'raipur',10000);
select * from passengers;



-- ----------------------------------------------------------------------
create table college_student(name varchar(10),id int,age int,primary key(id));
DROP TABLE IF EXISTS college_Student;
select * from college_Student;

create table college_audit(id int,audit_description varchar(10),primary key(id));
DROP TABLE IF EXISTS college_audit;

DELIMITER $$

CREATE TRIGGER afterinsertcoll 
AFTER INSERT ON college_Student 
FOR EACH ROW 
BEGIN
    INSERT INTO college_audit 
    VALUES (
        NEW.id,
        CONCAT('A new row inserted ', DATE_FORMAT(NOW(), '%d-%m-%y %h:%i:%s %p'))
    );
END$$

DELIMITER ;

INSERT INTO college_Student VALUES ('man',250,25);

select * from college_Student;
ALTER TABLE college_audit MODIFY audit_description VARCHAR(100);


select * from college_audit;