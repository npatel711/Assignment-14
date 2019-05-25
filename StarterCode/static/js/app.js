// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#submit");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "duration", "comments"]
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}
populate(data);

submit.on("click", function () {
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = data.filter(info => info.datetime === inputValue);
  console.log(filteredData);

  filteredData.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });

resetbtn.on("click", () => {
   tbody.html("");
   populate(data)
   console.log("Table reset")
  });
})