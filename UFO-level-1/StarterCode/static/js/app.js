// from data.js
var tableData = data;

function displayTable(data){
    // grab the tbody in the table
    var tbody = d3.select("tbody");
    // clear the existing tbody
    d3.select("tbody").html("");
    // looping through the tableData
    data.forEach(item => {
        // append the table row for the table
        var row = tbody.append("tr");
        // append only value into the table
        Object.entries(item).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
// display the whole dataset
displayTable(tableData);

// select the button
var button = d3.select("#filter-btn");
// select the form
var form = d3.select("#form");
// create event handlers
button.on("click",runEnter);
form.on("submit",runEnter);
// function to run for vaild input
function runEnter() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw html code
    var inputData = d3.select("#datetime");
    // get the value property of the input element
    var inputValue = inputData.property("value");
    console.log(inputValue);
    var result = tableData;
    // filter the results that match the input
    if (inputValue){
        result = result.filter(date => date.datetime === inputValue);
    };
    // display the filtered table
    displayTable(result);

};
