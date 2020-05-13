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

//select the button
var button = d3.select("#filter-btn");

//select the form
var form = d3.select("#form");

//create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//complete the event handler function for form
function runEnter() {
    //prevent page from refreshing
    d3.event.preventDefault();

    //select input element
    var InputElement = d3.select("#datetime");

    //value property
    var inputValue = InputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    //filtered data
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
};