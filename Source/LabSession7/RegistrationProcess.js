/**
 * Created by kisho on 3/10/2016.
 */

var registrationap = angular.module("register",[]);

registrationap.controller("RegistrationController", function($scope,$http, $httpParamSerializerJQLike) {

    $scope.SaveRegistration = function (first, last, user, pass) {
        console.log("inside login function");
        $http({
            method: 'POST',
            url: 'https://api.mongolab.com/api/1/databases/labassignment7/collections/CRUDusers/?apiKey=sMkBw5_AJU_9gVrb1lttOKapMGg37ef6',
            data: JSON.stringify({
                FirstName: first,
                LastName: last,
                UserName: user,
                password: pass
            }),
            contentType: "application/json"
        }).success(function () {
            $scope.first = "";
            $scope.last = "";
            $scope.user = "";
            $scope.pass = "";

            $scope.msg = "Registration Successful";
        })
    }
});
