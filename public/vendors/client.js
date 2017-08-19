var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function($http){
    console.log('Employee Controller is ready!');
    var self = this;
    console.log(self.newEmployee);
    
}]);