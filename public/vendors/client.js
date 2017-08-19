var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('Employee Controller is ready!');
    var self = this;

    self.employeeList = [];

    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employees',
        }).then(function (response) {
            console.log(response.data);
            self.employeeList = response.data;
            self.totalSalary += response.data.annual_salary;
        });
    }

    self.getEmployees();
}]);