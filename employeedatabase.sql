CREATE TABLE employees (
	id serial PRIMARY KEY,
	first_name VARCHAR (40) NOTNULL,
	last_name VARCHAR (40) NOTNULL,
	jobs_id INT REFERENCES jobs
	);
	
CREATE TABLE jobs (
	id serial PRIMARY KEY,
	job_description VARCHAR (60) NOTNULL,
	annual_salary integer NOTNULL
	);
	
INSERT INTO employees (first_name, last_name)
VALUES ('Grant', 'Portell'),
('Ian', 'Lehfeldt');

INSERT INTO jobs (job_description, annual_salary)
VALUES ('NBA Allstar','45000000'),
('Super Villian','4000000');

ALTER TABLE "public"."employees"
  ADD COLUMN "jobs_id" integer,
  ADD FOREIGN KEY ("jobs_id") REFERENCES "public"."jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

SELECT *
FROM employees
JOIN jobs ON employees.jobs_id = jobs.id;