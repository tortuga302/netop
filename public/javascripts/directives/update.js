(function () {
    angular.module('directives').directive("updateBook", function ($compile, Books) {
        return {
            restrict: 'E'
            , templateUrl: 'views/updateBook.html'
            , scope: {
                rowdata: '='
            }

            
            , link: function ($scope, iElement, iAttrs) {
                console.log("updateBook directive", $scope);
                /*$scope.data = $scope.rowdata;
                $scope.$watch('rowdata', function () {
                    console.log('hey, myVar has changed!',$scope.rowdata);
                });*/

            }
        };
    });

})();