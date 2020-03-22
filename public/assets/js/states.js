

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
  //console.log(response.data)
  let currentData = [];
  let territories = ["GU", "AS", "MP", "PR", "VI"];
  for (let i = 0; i < 56; i++) {
    if (!territories.includes(response.data[i].state)) {
      currentData.push(response.data[i]);
    }
  }
  //console.log(currentData)
  let colorScale = d3.scaleSequential()
    .domain([0, d3.max(currentData.map(item => item.positive)) / 100])
    .interpolator(d3.interpolateRgb("white", "blue"))
  let stateArray = currentData.map(item => item.state)
  var sampleData = {}; /* Sample random data. */
  stateArray.forEach(function (d, i) {
    sampleData[d] = {
      positive: currentData[i].positive,
      negative: currentData[i].negative,
      death: currentData[i].death,
      state: currentData[i].state,
      color: colorScale(currentData[i].positive)
    };
  });
  //console.log(sampleData)
  uStates.draw("#statesvg", sampleData, tooltipHtml);

  d3.select(self.frameElement).style("height", "600px");

  createDropDown(stateArray);

  //generates positive cases chart for default state
  getStatePositive(response.data, "NY");
  getStateTotal(response.data, "NY");
  getStateDeath(response.data, "NY")

});

function createDropDown(states) {
  const chartContainer = document.getElementById("chartContainer");
  const stateSelector = document.createElement("select");
  stateSelector.setAttribute("id", "stateSelector");
  stateSelector.setAttribute("class", "appearance-none w-24 mx-auto bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline")
  chartContainer.prepend(stateSelector);
  states.forEach(function (d, i) {
    let newState = document.createElement("option");
    newState.setAttribute("value", states[i]);
    newState.innerText = states[i];
    stateSelector.prepend(newState);
  })
}

function getStatePositive(data, state) {
  const positiveState = document.getElementById("positiveState").getContext("2d");

  let stateData = data.filter(item => item.state === state);
  let statePositive = [];
  let dates = []
  stateData.forEach(function (d, i) {
    statePositive.push(stateData[i].positive)
    dates.push(stateData[i].date)
  });
  const chart = new Chart(positiveState, {
    type: "line",

    data: {
      labels: dates.reverse(),
      datasets: [{
        label: "Positive Tests",
        backgroundColor: "aqua",
        borderColor: "blue",
        data: statePositive.reverse()
      }]
    }
  })
}

function getStateTotal(data, state) {
  const testState = document.getElementById("testState").getContext("2d");

  let stateData = data.filter(item => item.state === state);
  let stateTotal = [];
  let dates = []
  stateData.forEach(function (d, i) {
    stateTotal.push(stateData[i].total)
    dates.push(stateData[i].date)
  });
  const chart = new Chart(testState, {
    type: "line",

    data: {
      labels: dates.reverse(),
      datasets: [{
        label: "Total Tests Administered",
        backgroundColor: "aqua",
        borderColor: "blue",
        data: stateTotal.reverse()
      }]
    }
  })
}

function getStateDeath(data, state) {
  const deathState = document.getElementById("deathState").getContext("2d");

  let stateData = data.filter(item => item.state === state);
  let stateDeath = [];
  let dates = []
  stateData.forEach(function (d, i) {
    stateDeath.push(parseInt(stateData[i].death))
    dates.push(stateData[i].date)
  });
  const chart = new Chart(deathState, {
    type: "line",

    data: {
      labels: dates.reverse(),
      datasets: [{
        label: "Death Count",
        backgroundColor: "aqua",
        borderColor: "blue",
        data: stateDeath.reverse()
      }]
    }
  })
}

ScrollReveal().reveal("#chartContainer", {delay:250})
