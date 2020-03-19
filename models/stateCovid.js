const sequelize = require("sequelize");
// const Papa = require("papaparse");
// const fs = require("fs");
// const file = require("../db/seed.csv");

module.exports = function(sequelize, DataTypes) {
  var statecovid = sequelize.define("statecovid", {
    date: {
      type: DataTypes.DATE
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    positive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    negative: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pending: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    death: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  return statecovid;
};
