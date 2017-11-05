itemBuilder.config(function($routeProvider) {
	$routeProvider.when('/', {
    	controller: 'itemBuilderController',
    	templateUrl: 'javascripts/app/components/itemBuilder/itemBuilder.view.html'
  }).otherwise({
    redirectTo: '/'
  });
});