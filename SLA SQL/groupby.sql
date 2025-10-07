use class;
-- group by is used to group rows  that have the same value into it.
-- group by is depended with aggregate functions.
-- always the group by follows with aggregate functions.


-- syntax for group by is:
-- 
create table data (orderid INT PRIMARY KEY,customer_name VARCHAR(100),location VARCHAR(100),category VARCHAR(50),unitprice INT,quantity INT,sales INT);
insert into data values
(1, 'Sarah Lee', 'Mexico City', 'Electronics', 150, 1, 150),
(2, 'Michael Wong', 'Toronto', 'Furniture', 300, 1, 300),
(3, 'Emily Davis', 'San Francisco', 'Furniture', 150, 3, 450),
(4, 'David Kim', 'Vancouver', 'Clothing', 50, 5, 250),
(5, 'Sophia Patel', 'Tokyo', 'Electronics', 250, 2, 500),
(6, 'Liam Nguyen', 'Mexico City', 'Furniture', 400, 1, 400),
(7, 'Isabella Rossi', 'Toronto', 'Clothing', 75, 3, 225),
(8, 'Ethan Müller', 'San Francisco', 'Electronics', 180, 2, 360),
(9, 'Olivia Sato', 'Vancouver', 'Furniture', 350, 1, 350),
(10, 'Noah Dupont', 'Tokyo', 'Clothing', 60, 4, 240),
(11, 'Emma Hernandez', 'Mexico City', 'Electronics', 220, 2, 440),
(12, 'Jacob Kowalski', 'Toronto', 'Furniture', 280, 2, 560),
(13, 'Ava Morales', 'San Francisco', 'Clothing', 55, 5, 275),
(14, 'William Tanaka', 'Vancouver', 'Electronics', 190, 3, 570),
(15, 'Mia Dupuis', 'Tokyo', 'Furniture', 320, 1, 320),
(16, 'Alexander Ivanov', 'Mexico City', 'Clothing', 65, 4, 260),
(17, 'Isabella Garcia', 'Toronto', 'Electronics', 230, 2, 460),
(18, 'Daniel Moreno', 'San Francisco', 'Furniture', 290, 2, 580),
(19, 'Sophia Nguyen', 'Vancouver', 'Clothing', 70, 3, 210),
(20, 'John Smith', 'Tokyo', 'Electronics', 200, 2, 400);
select * from data;

-- What is the total sales amount for each product category?
select category,sum(sales) from data group by category;

-- What is the average unit price in each location?
select location,avg(unitprice) from data group by location;

-- How many orders has each customer placed?
select orderid,count(orderid) from data group by orderid;

-- What is the total quantity sold per location?
select location,sum(quantity) from data group by location;

-- What is the highest sales value recorded in each category?
select category,max(sales) from data group by category;

--  What is the minimum unit price in each product category?
select category,min(unitprice) from data group by category;

-- What is the total number of orders in each location?
select location,sum(quantity) from data group by location;

-- What is the average quantity sold per customer?
select customer_name,avg(quantity) from data group by customer_name;

-- What is the total sales per location and category?
select location,category,sum(sales) from data group by loaction,category;

-- How many unique location bought items from each category?
-- distinct is used for unique data
select distinct(location),count(category) from data group by location;

create table employees3 (EmployeeID INT PRIMARY KEY,name VARCHAR(50),Department VARCHAR(50),Salary DECIMAL(10, 2));
insert into employees3 values
(1, 'Alice Johnson', 'HR', 60000.00),
(2, 'Bob Smith', 'HR', 70000.00),
(3, 'Charlie Brown', 'IT', 80000.00),
(4, 'David Wilson', 'IT', 90000.00),
(5, 'Eva Green', 'Sales', 50000.00),
(6, 'Frank White', 'Sales', 50000.00),
(7, 'Grace Black', 'IT', 80000.00);
select * from employees3;

-- What is the total salary paid in each department?
select Department,sum(Salary) from employees3 group by Department;

-- What is the average salary of employees in each department?
select department, avg(salary) from employees3 group by department;

-- What is the highest salary in each department?
select department, max(salary) from employees3 group by department;

-- What is the lowest salary in each department?
select department, min(salary) from employees3 group by department;

-- How many employees are there in each department?
select department ,count(employeeID) from employees3 group by department;

-- How many distinct salary values are there in each department?
select distinct(salary), count(department) from employees3 group by salary;

-- Which departments have more than 2 employees?
select department,count(department) as DEPT from employees3 group by department having DEPT >2;

-- Which departments have a total salary greater than 150000?

-- Which departments have an average salary greater than 70000?

-- Which departments have a maximum salary less than 90000?

-- having clause:
-- which is used inside the group by filter the record
-- use "as" for having clause
-- as is known as alice name

-- where clause