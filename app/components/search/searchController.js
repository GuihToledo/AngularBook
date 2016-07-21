var myApp = angular.module('myApp', []);
myApp.controller('searchCtrl', function ($scope, $http, $window) {

	$scope.searchBook = function() {
		$http.get("https://www.googleapis.com/books/v1/volumes?q=" + $scope.name)
			.then(function(response) {
				$scope.list = response.data.items;
			});
	}

});