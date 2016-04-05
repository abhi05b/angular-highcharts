var Converter = require("csvtojson").Converter;
var converter = new Converter({});
module.exports= function($rootScope,$http,csvURL,matchDetailService){
$http.get(csvURL).then(function(response){
		  converter.fromString(response.data, function(err,result){
			  matchDetailService.setMatchList(result);
			  $rootScope.$broadcast('csvLoaded');
			});
	  });

};