CREATE TABLE employees (
	id serial PRIMARY KEY,
	first_name VARCHAR (20) NOT NULL,
	last_name VARCHAR (20) NOT NULL,
	job_description VARCHAR (60) NOT NULL,
	annual_salary integer NOT NULL
	);

INSERT INTO employees (first_name, last_name, job_description, annual_salary)
VALUES ('Grant', 'Portell', 'NBA Allstar','450000'),
('Ian', 'Lehfeldt', 'Super Villian','400000'),
('Janelle', 'Monae', 'Musician', '600000'),
('Clark', 'Kent', 'Reporter', '300000');

ALTER TABLE employees ADD COLUMN "is_active" boolean NOT NULL DEFAULT 'true'