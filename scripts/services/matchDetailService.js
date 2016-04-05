module.exports = function(){
	var matchList;
	var teamMap={};
	var venueMap={};
	
	this.getMatchList = function(){
		return matchList;
	};

	this.setMatchList = function(list){
		matchList = list;
		initMatchDetail();
	};
	
	this.getTeams = function(){
		return Object.keys(teamMap);
	};
	
	this.getGraphValueForTeam = function(criteria){
		return this.getTeams().map(function(team){
			return teamMap[team][criteria];
	  });
	};	 

	this.getVenues = function(){
		return Object.keys(venueMap);
	};
	
	this.getGraphValueForVenue = function(criteria){
		return this.getVenues().map(function(team){
			return venueMap[team][criteria];
	  });
	};	 
	
	var initMatchDetail = function(){
		matchList.forEach(function(matchObj,i){
			var oppositonTeam = matchObj.opposition.slice(2);
			var venueCountry = venueCountryMap[matchObj.ground];
			populateCriteria(matchObj,teamMap,oppositonTeam );
			populateCriteria(matchObj,venueMap,venueCountry );
			
		});
	};
	
	this.getVenueMap = function(){
		return teamMap;
	};
	
	var populateVenueMap = function(){
		return teamMap;
	};
	
	function populateCriteria(matchObj,map, key){
			var runs = isNaN(parseInt(matchObj.batting_score))?0:parseInt(matchObj.batting_score);
			map[key]=map[key] || {};
			map[key].totalRuns = map[key].totalRuns || 0 ;
			map[key].totalRuns = map[key].totalRuns + runs;
			map[key].hundreds = map[key].hundreds || 0 ;
			map[key].fifties = map[key].fifties || 0 ;
			map[key].matches = map[key].matches || 0 ;
			map[key].matchesWon = map[key].matchesWon || 0 ;
			map[key].matches++;
			if(matchObj.match_result === 'won') map[key].matchesWon++;
			if(runs>=100) map[key].hundreds++; 
			if(runs>=50) map[key].fifties++;
			if(runs>=50) map[key].fifties++; 
			map[key].winPercent = parseFloat(((map[key].matchesWon/map[key].matches)*100).toFixed(2));
	}
	
	var venueCountryMap = {'Gujranwala':'Pakistan',
'Dunedin':'New Zealand',
'Wellington':'New Zealand',
'Sharjah':'U.A.E.',
'Leeds':'England',
'Nottingham':'England',
'Nagpur':'India',
'Pune':'India',
'Margao':'India',
'Chandigarh':'India',
'Cuttack':'India',
'Kolkata':'India',
'Gwalior':'India',
'New Delhi':'India',
'Perth':'Australia',
'Hobart':'Australia',
'Adelaide':'Australia',
'Brisbane':'Australia',
'Sydney':'Australia',
'Melbourne':'Australia',
'Mackay':'Australia',
'Hamilton':'Australia',
'Harare':'Zimbabwe',
'Cape Town':'South Africa',
'Port Elizabeth':'South Africa',
'Centurion':'South Africa',
'Johannesburg':'South Africa',
'Bloemfontein':'South Africa',
'Durban':'South Africa',
'East London':'South Africa',
'Jaipur':'India',
'Bangalore':'India',
'Jamshedpur':'India',
'Faridabad':'India',
'Guwahati':'India',
'Colombo (RPS)':'Sri Lanka',
'Moratuwa':'Sri Lanka',
'Kanpur':'India',
'Ahmedabad':'India',
'Indore':'India',
'Mohali':'India',
'Rajkot':'India',
'Hyderabad (Deccan)':'India',
'Jalandhar':'India',
'Napier':'New Zealand',
'Auckland':'New Zealand',
'Christchurch':'New Zealand',
'Colombo (SSC)':'Sri Lanka',
'Mumbai':'India',
'Chennai':'India',
'Vadodara':'India',
'Delhi':'India',
'Visakhapatnam':'India',
'Amritsar':'India',
'Mumbai (BS)':'India',
'The Oval':'Australia',
'Manchester':'Australia',
'Toronto':'Canada',
'Paarl':'South Africa',
'Benoni':'South Africa',
'Bulawayo':'Zimbabwe',
'Port of Spain':'South Africa',
'Kingstown':'South Africa',
'Bridgetown':'Australia',
'Hyderabad (Sind)':'Pakistan',
'Karachi':'Pakistan',
'Lahore':'Pakistan',
'Dhaka':'Bangaladesh',
'Kochi':'India',
'Taupo':'New Zealand',
'Hove':'England',
'Bristol':'England',
'Taunton':'England',
'Birmingham':'England',
'Galle':'Sri Lanka',
'Nairobi (Gym)':'Kenya',
'Jodhpur':'India',
'Lord\'s':'England',
'Chester-le-Street':'England',
'Pietermaritzburg':'South Africa',
'Rawalpindi':'Pakistan',
'Peshawar':'Pakistan',
'Dambulla':'Sri Lanka',
'Chittagong':'India',
'Multan':'Pakistan',
'Belfast':'Ireland',
'Southampton':'England',
'Canberra':'Australia'
};
	
	
}