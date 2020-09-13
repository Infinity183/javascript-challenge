// from data.js
var tableData = data;

// Checking to ensure we're getting the city value correctly.
console.log(tableData[0].city);

// Defining the table here to correspond to the table id in the index.html file.
var ufo_table = document.getElementById("ufo-table");
var table_body = d3.select("tbody");

// Filling the table with the corresponding cell values from data.js.
tableData.forEach(function(sightings) {
    var row = table_body.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Defining the filter field and filter button, identified from index.html.
var datetime_filter = d3.select("#datetime");
var city_filter = d3.select("#city");
var state_filter = d3.select("#state");
var country_filter = d3.select("#country");
var shape_filter = d3.select("#shape");

var the_button = d3.select("#filter-btn");

// Clicking on the button will activate the runFilter function.
the_button.on("click", runFilter);

function runFilter() {
    // Needs to prevent page refreshing.
    d3.event.preventDefault();

    // Defining the filter_input.

    // The string inputs need to be changed to lower case by default
    // so they match the original table.

    var datetime_input = datetime_filter.property("value");
    var city_input = city_filter.property("value").toLowerCase();
    var state_input = state_filter.property("value").toLowerCase();
    var country_input = country_filter.property("value").toLowerCase();
    var shape_input = shape_filter.property("value").toLowerCase();

    // We want to filter the table multiple times.

    // We'll start with the date filter and move through shape.

    // The filter takes PAIRS of conditions for each filter; either
    // the input is blank, or it matches the item on the list.
    
    var filtered_data = tableData.filter(sighting =>
        (sighting.datetime === datetime_input || datetime_input === "") &&
        (sighting.city === city_input || city_input === "") &&
        (sighting.state === state_input || state_input === "") &&
        (sighting.country === country_input || country_input === "") &&
        (shape_input === sighting.shape || shape_input === ""));
    tr = ufo_table.getElementsByTagName("tr");
    for (p = tr.length - 1; p > 0; p--) {
        document.getElementById("ufo-table").deleteRow(p);
    }
    filtered_data.forEach(function(sightings) {
        var row = table_body.append("tr");
        Object.entries(sightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}