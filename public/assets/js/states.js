// const d3 = require("d3");
// const path = d3.geoPath();
// const uStates = require("./uStates.js");
console.log("test");
function tooltipHtml(n, d) {
  /* function to create html content string in tooltip div. */
  return (
    "<h4>" +
    n +
    "</h4><table>" +
    "<tr><td>Low</td><td>" +
    d.low +
    "</td></tr>" +
    "<tr><td>Average</td><td>" +
    d.avg +
    "</td></tr>" +
    "<tr><td>High</td><td>" +
    d.high +
    "</td></tr>" +
    "</table>"
  );
}

axios.get("/api/statecovid").then(function(response) {
  console.log(response);
  var sampleData = {}; /* Sample random data. */
  [
    "HI",
    "AK",
    "FL",
    "SC",
    "GA",
    "AL",
    "NC",
    "TN",
    "RI",
    "CT",
    "MA",
    "ME",
    "NH",
    "VT",
    "NY",
    "NJ",
    "PA",
    "DE",
    "MD",
    "WV",
    "KY",
    "OH",
    "MI",
    "WY",
    "MT",
    "ID",
    "WA",
    "DC",
    "TX",
    "CA",
    "AZ",
    "NV",
    "UT",
    "CO",
    "NM",
    "OR",
    "ND",
    "SD",
    "NE",
    "IA",
    "MS",
    "IN",
    "IL",
    "MN",
    "WI",
    "MO",
    "AR",
    "OK",
    "KS",
    "LS",
    "VA"
  ].forEach(function(d) {
    sampleData[d] = {
      positive: d3.min([low, mid, high]),
      negative: d3.max([low, mid, high]),
      death: Math.round((low + mid + high) / 3),
      total: something,
      color: d3.interpolate("#ffffcc", "#800026")(positive / 100)
    };
  });
});

/* draw states on id #statesvg */

uStates.draw("#statesvg", sampleData, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");
