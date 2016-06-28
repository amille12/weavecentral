app.service('directoryList', function($http) {

  var baseUrl = 'http://localhost:8000/api/people/';

  this.getEmployees = function () {
    return $http.get(baseUrl).then(function(res){
      return res.data;
      console.log(data);
    });
  }
});



  // var data =  [{
  //     "id": 0,
  //     "firstName": "george",
  //     "lastName": "bluth",
  //     },
  //     {
  //         "id": 1,
  //         "firstName": "lucille",
  //         "lastName": "bluth",
  //     },
  //     {
  //         "id": 2,
  //         "firstName": "oscar",
  //         "lastName": "bluth",
  //     }];
  //
  //     this.getEmployees = function(){
  //             return data;
  //         }
  //
  // });

  // this.getEmployees = function () {
  //   return $http.get(baseUrl).then(function(res) {
  //     return res.data;
  //   });
  // };
