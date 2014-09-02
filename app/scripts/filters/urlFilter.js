'use strict';
var app = angular.module('ngnewsApp');

app.filter('hostnameFromUrl', function() {
	return function(str) {
		var url = document.createElement('a');
		url.href = str;
		return url.hostname;
	};
});