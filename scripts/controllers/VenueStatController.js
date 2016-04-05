module.exports = function(mapService,$scope,matchDetailService) {
     	  
	$scope.changeVenueCriteria = createVenueChart;
	$scope.$on('csvLoaded',function(){
		createVenueChart('totalRuns','Total runs');
	});
	

	function createVenueChart(criteria, criteriaLabel){
	  	mapService.initVenueMap(matchDetailService.getVenues() ,
								matchDetailService.getGraphValueForVenue(criteria),
								criteriaLabel+' against Venue Countries','',
								criteriaLabel);
	}  
}