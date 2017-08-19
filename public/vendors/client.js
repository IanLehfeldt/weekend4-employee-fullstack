var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function($http){
    console.log('Employee Controller is ready!');
    var self = this;
    

    $http({
        method: 'GET',
        url: '/employees',
    }).then(function (response){
        console.log(response.data);
    });
}]);