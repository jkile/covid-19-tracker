const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const db = require("../models");

const csvData = [];
db.statecovid.sync({ force: true }).then(function() {
  fs.createReadStream(path.resolve(__dirname, "seed.csv"))
    .pipe(csv.parse({ headers: true }))
    .on("error", error => console.error(error))
    .on("data", row => {
      csvData.push(row);
    })
    .on("end", rowCount => {
      console.log(csvData[0]);
      db.statecovid.bulkCreate(csvData).then(function(res) {
        console.log(res);
      });
      // connection.query("INSERT INTO ");
    });
});
