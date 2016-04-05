module.exports = function(mapService,$scope,matchDetailService) {
     	  
	$scope.changeTeamCriteria = createOppositionTeamCharts;
	$scope.$on('csvLoaded',function(){
		createOppositionTeamCharts('totalRuns','Total runs');
	});
	

	function createOppositionTeamCharts(criteria,criteriaLabel){
	  	mapService.initTeamMap(matchDetailService.getTeams() ,
								matchDetailService.getGraphValueForTeam(criteria),
								criteriaLabel+' against opposition teams','',
								criteriaLabel);
		mapService.initBarChart(matchDetailService.getTeams(),
							 matchDetailService.getGraphValueForTeam(criteria),
							 criteriaLabel+' against opposition teams','',
							 criteriaLabel);
	}  
}