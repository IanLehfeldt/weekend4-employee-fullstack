var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('Employee Controller is ready!');
    var self = this;

    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employees',
        }).then(function (response) {
            self.employeeList = [];
            self.averageSalary = 0;
            console.log(response.data);
            self.employeeList = response.data;
            
            activeEmployee = [];
            self.totalActiveSalary = 0;

            for (var i = 0; i < self.employeeList.length; i++) {
                var employee = self.employeeList[i];
                if (employee.is_active) {
                    activeEmployee.push(employee);
                    self.totalActiveSalary += employee.annual_salary;
                }
            }

            console.log(self.totalActiveSalary);
            
            // self.averageSalary = totalActiveSalary / (activeEmployee.length);

            self.monthlyAverage = self.totalActiveSalary / 12;
            
        });
    }; // get employee

    self.submitNewEmployee = function () {
        console.log('Submitting new employee', self.newEmployee);
        $http({
            method: 'POST',
            url: '/employees',
            data: self.newEmployee
        }).then(function (response) {
            self.newEmployee = {};
            console.log(response.data);
            self.getEmployees();
        });
    }; // new employee

    self.activeToggle = function (id) {
        console.log('activeToggle was clicked');
        $http({
            method: 'PUT',
            url: '/employees/' + id,
        }).then(function (response){
            self.getEmployees();
        })
    }

    self.getEmployees();
}]); // employee controller

function salaryAverager(employeeArray) {

}