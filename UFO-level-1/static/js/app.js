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
var the_filter = d3.select("#datetime");
var the_button = d3.select("#filter-btn");

// Clicking on the button will activate the runFilter function.
the_button.on("click", runFilter);

function runFilter() {
    // Needs to prevent page refreshing.
    d3.event.preventDefault();

    // Defining the filter_input.
    var filter_input = the_filter.property("value");

    // This is the filtered table.
    var specific_date = tableData.filter(sighting =>
        filter_input === sighting.datetime || filter_input === "");
    // We need to define the table rows.
    tr = ufo_table.getElementsByTagName("tr");

    // Once we're filtering the table, we first need a clean slate.
    // We will stop before we get to the actual headers.
    for (p = tr.length - 1; p > 0; p--) {
        document.getElementById("ufo-table").deleteRow(p);
    }

    // If we get a valid date in the filter field, then we'll add all
    // of the rows from the filtered data into the now-blank ufo-table.

    // When the field is blank, clicking the Filter Table button will
    // simply define specific_date as all of the rows in data.js.
    specific_date.forEach(function(sightings) {
        var row = table_body.append("tr");
        Object.entries(sightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}