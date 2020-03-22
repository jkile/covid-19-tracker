#! /app/.heroku/node/bin/node
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const db = require("../models");
const axios = require("axios");

axios({
  url: "https://covidtracking.com/api/states/daily.csv",
  method: "GET",
  responseType: "stream"
}).then(function(response) {
  const csvData = [];
  response.data
    .pipe(
      csv.parse({
        headers: [
          "date",
          "state",
          "positive",
          "negative",
          "pending",
          undefined,
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
      console.log(csvData[0]);
      db.statecovid.drop().then(function(res){
        db.sequelize.sync().then(function(res){
          db.statecovid.bulkCreate(csvData).then(function(res) {});
        })
      })
    });
});