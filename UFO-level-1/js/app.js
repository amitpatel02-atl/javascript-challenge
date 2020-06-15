// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select tbody
var tbody=d3.select("tbody");
// Get a reference to the table body
function table_function(data){
    tbody.html("");

    //Collect the data
    data.forEach((rowdata)=>{

        // Use d3 to append one table row "tr" for each sighting
        var row=tbody.append("tr");

        // Use d3 to append the rowdata
        Object.values(rowdata).forEach((values)=>{
            var cells=row.append("td");
            
            //Display text
            cells.text(values);
        });
    });
}
// Call the table
table_function(tableData);
// ******************************************************************************

// Set a variable to the button
var date_button = d3.select("#filter-btn")

// Click the button
date_button.on("click", runEnter);

// Call the function runEnter
function runEnter() {
d3.select("tbody").html("");

//Prevent the page from refreshing
d3.event.preventDefault();

//Gather data by date with user input
var inputValue = d3.select("#datetime").property("value")
    
// Filter report
var filteredData = tableData.filter(date => date.datetime === inputValue);
console.log(filteredData)

    //Show results on Page
    filteredData.forEach(function(rowdata2) {
              console.log(rowdata2);
              var row = tbody.append("tr");
              Object.entries(rowdata2).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
         });
    }