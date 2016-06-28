app.service('directoryCrud', function($http) {

  var baseUrl = 'http://localhost:8000/api/people/';

  this.addEmployee = function (employee) {
    return $http.post(baseUrl, employee).then(function(res) {
      return res.data;
    });
  };

  this.deleteEmployee = function (employee) {
    return $http.delete(baseUrl + employee).then(function(res) {
      return res.data;
    });
  };


});
