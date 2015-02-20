function myCtrl($scope,$http,$timeout,$window,$location) {

	$scope.absUrl = $location.absUrl();


	(function tick() {
 		 $http.get     ("http://www.w3schools.com//website/Customers_JSON.php").success(function(response){
			$scope.names = response; 
			
		//Added the below statement to check service is called after timeout
		//	$window.alert("hi");


		//calls the request to refresh after every 2 mins
			$timeout(tick,120000); 

		})
		.error(function() { 
			$window.alert("error");
		});
	})();
}
