/* Tutorial at https://scotch.io/tutorials/angularjs-form-validation */

// define angular module/app
var formApp = angular.module('formApp', []);

// create angular controller and pass in $scope and $http
function formController($scope, $http) {
	$scope.formData = {};

	$scope.processForm = function() {
		$http({
			method	: 'POST',
			url			: '../process.php',
			data 		: $.param($scope.formData),
			headers : {'Content-Type': 'application/x-www-form-urlencoded'},
		})
		.success(function(data) {
			// console.log(data);

			if (!data.success) {
				$scope.errorContactName = data.errors.contactName;
				$scope.errorContactEmail = data.errors.contactEmail;
				$scope.errorContactMessage = data.errors.contactMessage;
			}
			else {
				$scope.message = data.message;
			}
		});	
	};
}
