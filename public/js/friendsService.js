var app = angular.module('fullestStack');

app.service('friendsService', function($http, $q){
	this.getFriends = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:8888/friends' //local host or digital oceans, your website address here.
		}).then(function(res){
			return res.data;
		});
	}

this.addFriend = function(friend) {
	return $http({
		method: 'POST',
		url: 'http://localhost:8888/friends',
		data: {
			name: friend.name,
			age: friend.age,
			yearMet: friend.yearMet
		}
	})
};


this.unFriend = function(friend) {
	return $http({
		method: 'DELETE',
		url: 'http://localhost:8888/friends/' + friend._id,
	});
};

});