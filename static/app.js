// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody");

//console.log the ufo sighting data
console.log(data);

//Loop through data and console.log each sighting
data.forEach(function(ufosightings) {
    console.log(ufosightings);

    //Use d3 to append one table row
    var row = tbody.append("tr");

    //object.entries
    Object.entries(ufosightings).forEach(function([key, value]) {
        console.log(key, value);

        //use d3 to append one cell per sighting
        var cell = row.append("td");

        //use d3 to update each cell's text
        cell.text(value);
    });
});

//data.forEach((ufosightings) => {
    //var row = tbody.append("tr");
    //Object.entries(ufosightings).forEach(([key.value]) => {
        //var cell = row.append("td");
        //cell.text(value);
    //});
//});

var button = d3.select("#button");

var form = d3.select("#datetime");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(date);
}