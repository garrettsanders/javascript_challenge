// from data.js
var tableData = data;

//console.log the ufo sighting data
console.log(data);

// select tbody 
var tbody = d3.select("tbody");

function write_row(ufosightings) {
    console.log(ufosightings);
    var row = tbody.append('tr');


    //object.entries
    Object.entries(ufosightings).forEach(function([key, value]) {
        console.log(key, value);

        //use d3 to append one cell per sighting
        var cell = row.append("td");

        //use d3 to update each cell's text
        cell.text(value);
})

}

tableData.forEach(write_row)


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

//create event handlers
button.on("click", function() {

    //prevent page from refreshing
    d3.event.preventDefault();

    //select input element
    var InputElement = d3.select("#datetime");

    //value property
    var inputValue = InputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    //filtered data
    var filteredData = tableData.filter(function(entry) {
        return entry.datetime === inputValue;
    })

    //remove any children from the table
    tbody.html("")
    filteredData.forEach(write_row)

    console.log(filteredData)

});





    
    


