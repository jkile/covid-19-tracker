const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const db = require("../models");
const axios = require("axios");

// axios.get("https://covidtracking.com/api/states/daily.csv").then(function(response){
//   console.log(response.data);
//   fs.writeFile(path.resolve(__dirname, "seed2.csv"), response.data, function(err){
//     if (err) throw err;

//   })
// })
const csvData = [];
db.statecovid.sync({ force: true }).then(function() {
  fs.createReadStream(path.resolve(__dirname, "seed2.csv"))
    .pipe(
      csv.parse({
        headers: [
          "date",
          "state",
          "positive",
          "negative",
          "pending",
          "death",
          "total",
          undefined
        ],
        skipRows: 1
      })
    )
    .on("error", error => console.error(error))
    .on("data", row => {
      // console.log(row);
      csvData.push(row);
      csvData.forEach(data => {
        if (data.positive === "") {
          data.positive = 0;
        } else {
          data.positive = parseInt(data.positive);
        }
        if (data.negative === "") {
          data.negative = 0;
        } else {
          data.negative = parseInt(data.negative);
        }
        if (data.pending === "") {
          data.pending = 0;
        } else {
          data.pending = parseInt(data.pending);
        }
        if (data.death === "") {
          data.death = 0;
        } else {
          data.death = parseInt(data.death);
        }
        if (data.total === "") {
          data.total = 0;
        } else {
          data.total = parseInt(data.total);
        }
      });
    })
    .on("end", rowCount => {
      // console.log(csvData[0]);
      db.statecovid.bulkCreate(csvData).then(function(res) {});
      // connection.query("INSERT INTO ");
    });
});
