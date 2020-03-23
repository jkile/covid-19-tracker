

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
  let colorScale = d3
    .scaleSequential()
    .domain([0, d3.max(currentData.map(item => item.positive))])
    .interpolator(d3.interpolateRgb("white", "#b74528"));
  let stateArray = currentData.map(item => item.state);
  var sampleData = {}; /* Sample random data. */
  stateArray.forEach(function (d, i) {
    sampleData[d] = {
      positive: currentData[i].positive,
      negative: currentData[i].negative,
      death: currentData[i].death,
      state: currentData[i].state,
      color: colorScale(currentData[i].positive * 20)
    };
  });
  //console.log(sampleData)
  uStates.draw("#statesvg", sampleData, tooltipHtml);

  d3.select(self.frameElement).style("height", "600px");

  //generates positive cases chart for default state
  getStatePositive(response.data.filter(item => item.state === "AK"));
  getStateTotal(response.data.filter(item => item.state === "AK"));
  getStateDeath(response.data.filter(item => item.state === "AK"));

});

function getStatePositive(data) {
  //let positiveState = document.getElementById("positiveState").getContext("2d");
  let container = document.getElementById("positiveContainer");
  let previousCanvas = container.lastElementChild;
  if (previousCanvas) {
    container.removeChild(previousCanvas);
  }
  let positiveState = document.createElement("canvas");
  positiveState.setAttribute("id", "positiveState");
  container.appendChild(positiveState);


  let statePositive = [];
  let dates = []
  data.forEach(function (d, i) {
    statePositive.push(data[i].positive)
    dates.push(data[i].date)
  });
  let chart = new Chart(positiveState, {
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

function getStateTotal(data) {
  let container = document.getElementById("testContainer");
  let previousCanvas = container.lastElementChild;
  if (previousCanvas) {
    container.removeChild(previousCanvas);
  }
  let testState = document.createElement("canvas");
  testState.setAttribute("id", "testState");
  container.appendChild(testState);

  let stateTotal = [];
  let dates = []
  data.forEach(function (d, i) {
    stateTotal.push(data[i].total)
    dates.push(data[i].date)
  });
  let chart = new Chart(testState, {
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

function getStateDeath(data) {
  let container = document.getElementById("deathContainer");
  let previousCanvas = container.lastElementChild;
  if (previousCanvas) {
    container.removeChild(previousCanvas);
  }
  let deathState = document.createElement("canvas");
  deathState.setAttribute("id", "deathState");
  container.appendChild(deathState);

  let stateDeath = [];
  let dates = []
  data.forEach(function (d, i) {
    stateDeath.push(parseInt(data[i].death))
    dates.push(data[i].date)
  });
  let chart = new Chart(deathState, {
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

ScrollReveal().reveal("#chartContainer", { delay: 250 });

document.getElementById("stateSelector").oninput = getStateData;

function getStateData(e) {
  console.log(e.target.value)
  axios.get("/api/statecovids/state/" + e.target.value).then(function (response) {
    getStatePositive(response.data);
    getStateTotal(response.data);
    getStateDeath(response.data);
  })
}