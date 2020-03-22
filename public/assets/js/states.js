

// const d3 = require("d3");
// const path = d3.geoPath();
// const uStates = require("./uStates.js");
function tooltipHtml(n, d) {
  /* function to create html content string in tooltip div. */
  return (
    "<h4>" +
    n +
    "</h4><table>" +
    "<tr><td>Positive</td><td>" +
    d.positive +
    "</td></tr>" +
    "<tr><td>Negative</td><td>" +
    d.negative +
    "</td></tr>" +
    "<tr><td>Deaths</td><td>" +
    d.death +
    "</td></tr>" +
    "</table>"
  );
}

axios.get("/api/statecovid").then(function (response) {
  console.log(response.data)
  let currentData = [];
  let territories = ["GU", "AS", "MP", "PR", "VI"];
  let today = new Date;
  let currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() -1}`;
  console.log(response.data[0].date);
  let currentDayArray = response.data.filter(item => item.date == currentDate);
  console.log(currentDayArray);
  for (let i = 0; i < 56; i++) {
    if (!territories.includes(response.data[i].state)) {
      currentData.push(response.data[i]);
    }
  }



  // response.data.forEach(function(d, i){
  //   if (response.data[i].date == currentDate){
  //     if (!territories.includes(response.data[i].state)) {
  //       currentData.push(response.data[i]);
  //     }
  //   }
  // })

  console.log(currentData)
  let stateArray = currentData.map(item => item.state)
  var sampleData = {}; /* Sample random data. */
  stateArray.forEach(function (d, i) {
    sampleData[d] = {
      positive: currentData[i].positive,
      negative: currentData[i].negative,
      death: currentData[i].death,
      state: currentData[i].state,
      color: d3.interpolate("#ffffcc", "#0000cc")(currentData[i].positive / 100)
    };
  });
  console.log(sampleData)
  uStates.draw("#statesvg", sampleData, tooltipHtml);

  d3.select(self.frameElement).style("height", "600px");

  // const positiveState = document.getElementById("positiveState").getContext("2d");

  // let washingtonData = response.data.filter((item, i, ar) => ar.indexOf(item.state) === i);


  // const chart = new Chart(positiveState, {
  //   type: "line",

  //   data: {
  //     label: "Positive Tests",
  //     backgroundColor: "blue",
  //     borderColor: "slateblue",
  //     data: washingtonData
  //   }
  // })

});


