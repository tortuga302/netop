(function () {
    var app = angular.module('main', ['directives']);
    angular.module('directives', []);

    app.controller('mainCtrl', ['$scope', 'Books', 'bookdata', 'newbook', function ($scope, Books, bookdata, newbook) {
        $scope.onOver = false;
        $scope.idDisabled = true;
        $scope.sortType = 'id';
        $scope.sortReverse = false;
        $scope.selectedRow = {

        };
        $scope.newBookData = {};
        $scope.nbVisible = false;    
        Books.then(function successCallback(response) {
            console.log("successCallback", JSON.parse(response.data));
            $scope.books = JSON.parse(response.data);
        }, function errorCallback(response) {
            console.log("errorCallback", response);
        });

        $scope.onBtnUpdate = function (id) {
            console.log("clicked on the row", $scope.books[id], " id = " + id);
            bookdata.create($scope.books[id]);
        }
        
        $scope.onBtnInsert = function () {
            console.log("onBtnInsert",$scope.nbVisible)
            $scope.nbVisible = true;
            //newbook.create(newBookData);
        }
        
        $scope.onBtnSaveNewBook = function(){
            //validate data ???
             console.log("onBtnSaveNewBook",$scope.newBookData);
            newbook.create($scope.newBookData);
        }
         $scope.onBtnCancel = function(){
             console.log( $scope.newBookData);
             $scope.newBookData = {};
            $scope.nbVisible = false;
        }
        
    }]);

    app.factory('Books', ['$http', function ($http) {
        return $http({
            method: 'GET'
            , url: '/books'
        });
    }]);

    app.factory('bookdata', ['$http', function ($http) {
        return {
            create: function (data) {
                var method = 'POST';
                var url = "/updateBook";
                console.log("send book data", data);
                return $http({
                    method: method
                    , url: url
                    , data: data
                    , headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        };
      }]);

    app.factory('newbook', ['$http', function ($http) {
        return {
            create: function (data) {
                var method = 'POST';
                var url = "/createNewBook";
                console.log("send new book data", data);
                return $http({
                    method: method
                    , url: url
                    , data: data
                    , headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        };
      }]);
    /* angular.module('bookdata', []).factory('$bookdata', ['$http'
      , function ($http) {
            return {
                create: function (params) {
                    var method = 'POST';
                    var url = "/updateBook";
                    console.log("send book data", $.param(params));
                    return $http({
                        method: method
                        , url: url
                        , data: $.param(params)
                        , headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                }
            };
      }
  ])*/
    /*.controller('updateCtrl', ['$scope', 'bookdata', function ($scope, bookdata) {
        
    }]);*/

    /*var updateModule = angular.module('updateBook', []);

    updateModule.directive("update", ['update', function (update) {
            return {
                restrict: 'E',
                templateUrl: 'views/update.html',
                link: function ($scope) {
                    $scope.rowData = "sdfsffdfdfdfdf";
                   
                    console.log("updateData");
                   
                
                   
                }
            }
    }]);*/
}());