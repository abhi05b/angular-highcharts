var angular = require('angular');
var csvLoader = require('./csvLoader.js');
angular.module('mapDemoApp', [require('angular-material'),require('angular-ui-bootstrap')])
.constant('csvURL','/data/sachin.csv')
.run(csvLoader)
.controller('OppositionStatController', require('./controllers/OppostionStatController.js'))
.controller('VenueStatController', require('./controllers/VenueStatController.js'))
.service('matchDetailService',require('./services/matchDetailService.js'))
.service('mapService',require('./services/mapService.js'));
