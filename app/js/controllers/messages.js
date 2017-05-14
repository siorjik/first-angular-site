app.controller("guestMessagesCtrl", function($scope, $http) {
	$http.post("/app/backend/guest_book.php", {loadMess: true}).then(function(success) {
		$scope.message = success.data;
	}, function(error) {
		console.log(error);
	});
	
	this.messagesAll = function(text) {
		$http.post("/app/backend/guest_book.php", {message: text.mess, name: text.name}).then(function(success) {
			$scope.message = success.data;
			text.mess = "";
			text.name = "";
			$scope.guestForm.guestName.$setPristine(true);
			$scope.guestForm.guestMessage.$setPristine(true);
		}, function(error) {
			console.log(error);
		});
	}
});