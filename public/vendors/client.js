var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('Employee Controller is ready!');
    var self = this;

    self.employeeList = [];
    self.averageSalary = 0;

    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employees',
        }).then(function (response) {
            console.log(response.data);
            self.employeeList = response.data;
            for (var i = 0; i < self.employeeList.length; i++){
                var employee = self.employeeList[i];
                self.averageSalary += (employee.annual_salary)/(self.employeeList.length);
            }
        });
    }

    self.getEmployees();
}]);