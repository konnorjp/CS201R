angular.module('News', ['ui.router'])
.config([
	'$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
      		$stateProvider
        	.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		})
         	.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});

         $urlRouterProvider.otherwise('home');
}])
.factory('postFactory', [function(){
	var o = {
		posts: []
        };
        return o;
}])
.controller('MainCtrl', [
	'$scope',
        'postFactory',
        function($scope, postFactory){
                $scope.posts = postFactory.posts;
                $scope.addPost = function(userForm){
                	if($scope.user === '') { return; }
                        $scope.posts.push({
													title: userForm.glava,
													/*upvotes: 0,*/
      										name: userForm.nounBig,
     											avatar: userForm.url,
      										email: userForm.email,
      										noun: userForm.secondnoun,
													animal: userForm.animal,
													storyArea: '',
													comments: []
												});
												userForm.glava='';
										    userForm.nounBig = '';
										    userForm.url = '';
										    userForm.email='';
										    userForm.secondnoun='';
												userForm.animal='';
								};

/*
          			$scope.incrementUpvotes = function(post) {
                	post.upvotes += 1;
                };*/
}])

.controller('PostsCtrl', [
	'$scope',
        '$stateParams',
        'postFactory',
        function($scope, $stateParams, postFactory){
        	$scope.post = postFactory.posts[$stateParams.id];
						if($scope.post.animal == "Alligator") {
							$scope.post.storyArea= $scope.post.name + ' continued his walk along the edge of a ' + $scope.post.avatar + ' pond, when he met an alligator. The alligator handed ' + $scope.post.name + ' a ' + $scope.post.noun + ' and ' + $scope.post.email + ' slipped back into the water. ' + $scope.post.name + ' looked at the ' +
							$scope.post.noun + ' in his hand, shrugged, and ' + $scope.post.email + ' swallowed the ' + $scope.post.noun + ' before returning home to cook dinner.';
						}
						else if ($scope.post.animal == "Gorilla") {
							$scope.post.storyArea= 'A '+$scope.post.avatar +' gorilla '+$scope.post.email +' jumped out of the woods and waving a ' + $scope.post.noun + ' around in the air, ran around in a circle screaming, "I got a ' + $scope.post.noun +' today!" ' + $scope.post.name + ', who happened to be walking past, upon seeing this ' + $scope.post.avatar +
							' gorilla with a ' + $scope.post.noun + ' in his hand, ' + $scope.post.email + ' shreaked, "I got a ' + $scope.post.noun + ' yesterday!" After exchanging pleasantries, they rode off into the sunset together.';
						}
						else if ($scope.post.animal == "Werewolf") {
							$scope.post.storyArea = $scope.post.name + ' turned into a ' + $scope.post.avatar + ' werewolf on the 35th night of October. It was a ' + $scope.post.avatar +' night and there wasn\'t a ' +$scope.post.noun + ' to be seen. ' + $scope.post.name + ' howled at the '
							+ $scope.post.avatar + ' moon and ' +$scope.post.email +' ran along the golf course until he found a ' +$scope.post.noun + '. He picked up the ' + $scope.post.noun + ', juggled it with the flaming bowling pins that were laying around nearby. ' + $scope.post.name
							+ ' then spotted a ' + $scope.post.avatar + ' wildebeast and dropped the things he was juggling and ate it before taking a nap.';
						}
						else {
							$scope.post.storyArea= '';
						}

}]);
