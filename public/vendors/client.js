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
            for (var i = 0; i < self.employeeList.length; i++){
                var employee = self.employeeList[i];
                self.averageSalary += (employee.annual_salary)/(self.employeeList.length);
            }
        });
    }; // get employee

    self.submitNewEmployee = function () {
        console.log('Submitting new employee', self.newEmployee);
        $http({
            method: 'POST',
            url: '/employees',
            data: self.newEmployee
        }).then(function (response){
            self.newEmployee = {};
            console.log(response.data);
            self.getEmployees();
        });
    }; // new employee

    self.getEmployees();
}]); // employee controller