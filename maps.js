var vg_1 = "proportional_symbol_map.vg.json";
vegaEmbed("#propmap", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "Chropleth_map.vg.json";
vegaEmbed("#chropleth", vg_2).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3= "happiness_inequality_line_chart.vg.json";
vegaEmbed("#linechart", vg_3).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

