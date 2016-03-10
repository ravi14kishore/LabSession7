/**
 * Created by kisho on 3/10/2016.
 */
var deleteacc= angular.module("deleteAccount",[]);

deleteacc.controller("deleteController", function($scope,$http, $httpParamSerializerJQLike) {

    $scope.deleteAccount = function (pass) {
        console.log("inside login function");
        $http({
            method: 'DELETE',
            url: 'https://api.mongolab.com/api/1/databases/labassignment7/collections/CRUDusers/?apiKey=sMkBw5_AJU_9gVrb1lttOKapMGg37ef6',
            data: JSON.stringify({
                password: pass
            }).success(function () {
                $window.location = 'Login.html';


            })
        });


    }
});