// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData[0].city);

var ufo_table = document.getElementById("ufo-table");
for (var x = 1; x < tableData.length + 1; x++) {
    var Date_Time = tableData[x - 1].datetime;
    var City = tableData[x - 1].city;
    var State = tableData[x - 1].state;
    var Country = tableData[x - 1].country;
    var Shape = tableData[x - 1].shape;
    var Duration = tableData[x - 1].durationMinutes;
    var Comments = tableData[x - 1].comments;

    var new_row = ufo_table.insertRow(x);

    var date_time_cell = new_row.insertCell(0);
    var city_cell = new_row.insertCell(1);
    var state_cell = new_row.insertCell(2);
    var country_cell = new_row.insertCell(3);
    var shape_cell = new_row.insertCell(4);
    var duration_cell = new_row.insertCell(5);
    var comments_cell = new_row.insertCell(6);

    date_time_cell.innerHTML = Date_Time;
    city_cell.innerHTML = City;
    state_cell.innerHTML = State;
    country_cell.innerHTML = Country;
    shape_cell.innerHTML = Shape;
    duration_cell.innerHTML = Duration;
    comments_cell.innerHTML = Comments;

    console.log(new_row);

}
tableData.forEach(function(sighting) {
    var City = sighting.city;

    


});