angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);

function mainCtrl ($scope) {

  $scope.users = [];

  $scope.addNew = function (user) {
    $scope.users.push({
      unicorns: user.unicorn,
      name: user.nounBig,
      avatar: user.url,
      email: user.email,
      noun: user.secondnoun
    });
    user.unicorn='';
    user.nounBig = '';
    user.url = '';
    user.email='';
    user.secondnoun='';
  };
}
function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    replace: 'true',
    template: (
      '<div class="Avatar">' +
    '<h4>{{user.unicorns}}\'s Words</h4>' +
    '<p>{{user.name}}</p>' +
    '<p>{{user.avatar}}</p>' +
	'<p>{{user.email}}</p>'+
    '<p>{{user.noun}}</p>' +
	'<form action ="./index.html">'+
	'<button type="submit">Make a story</button></form>'+
      '</div>'
    ),
  };

}
