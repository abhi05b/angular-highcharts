var HighMaps = require('highcharts/highmaps');
var Highcharts = require('highcharts');
var _ = require('lodash');
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/exporting')(HighMaps);
require('./../world-all.js');
require('./../custom-world.js');

module.exports = function(){
var countryMap = {
'Pakistan' : 'pk',
'New Zealand' : 'nz',
'Sri Lanka' : 'lk',
'England' : 'gb',
'Bangladesh' : 'bd',
'West Indies' : 'do',
'South Africa' : 'za',
'Australia' : 'au',
'Zimbabwe' : 'zw',
'U.A.E.' : 'ae',
'Kenya' : 'ke',
'Netherlands' : 'nl',
'Namibia' : 'na',
'Ireland' : 'ie',
 'India' : 'in'
};

    
        
    this.initTeamMap =function(x,y,title,subtitle,criteria){
    var data = x.map(function(val,i){
        var hcKey = countryMap[val];
        var value = y[i];
        return {
            "hc-key": hcKey,
            "value": value
        };
    });
    
    var chart = new HighMaps.Map({

        title : {
            text : title
        },
chart: {
            renderTo: 'container',
             borderWidth: 0,
            width: '1100',
            height: '500',
            shadow: false,
            backgroundColor: 'transparent'
         },
        subtitle : {
            text : subtitle
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: _.min(y),
            minColor: '#ff1a75',
            maxColor: '#3333cc'
        },
         legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 20
            },

        series : [{
            data : data,
            mapData: HighMaps.maps['custom/world-robinson-highres'],
            joinBy: 'hc-key',
            name: criteria,
            states: {
                hover: {
                    color: '#BADA55'
                }
            }
        }]
    });
    };

    this.initVenueMap =function(x,y,title,subtitle,criteria){
    var mapData = HighMaps.geojson(HighMaps.maps['custom/world']);
    console.log(mapData);
    var data = x.map(function(val,i){
        var hcKey = countryMap[val];
        var value = y[i];
        return {
            "code": _.toUpper(hcKey),
            "name": val,
            "z": value
        };
    });
    
    console.log(data);
    
    var chart = new HighMaps.Map({
            chart : {
                 borderWidth: 0,
            width: '1100',
            height: '500',
            shadow: false,
            backgroundColor: 'transparent',
                renderTo: 'container2',
            },

            title: {
                text: title
            },

            subtitle : {
                text : subtitle
            },

            legend: {
                enabled: false
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            series : [{
                name: 'Countries',
                mapData: mapData,
                color: '#E0E0E0',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                mapData: mapData,
                name: criteria,
                joinBy: ['iso-a2', 'code'],
                color: '#ff1a75',
                data: data,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.name}: {point.z}'
                }
            }]
        });
    };
    
    this.initBarChart =function(x,y,title,subtitle,criteria){
        chart2 = new Highcharts.Chart({
        chart: {
            type: 'bar',
            renderTo: 'barGraph'
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        xAxis: {
            categories: x,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: criteria,
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
       
        credits: {
            enabled: false
        },
        series: [{
            name: criteria,
            data: y,
            color: '#ff1a75'
        }]
    });
    }
};