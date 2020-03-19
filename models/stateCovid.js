<<<<<<< HEAD
const DataTypes = require("sequelize");
var sequelize = require("../config/connection");

var Statecovid = sequelize.define("statecovid", {
  dateOf: {
    type: DataTypes.DATE
  },
  state: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2]
    }
  },
  positive: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: 0.0
  },
  negative: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: 0.0
  },
  pending: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: 0.0
  },
  death: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: 0.0
  },
  total: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: 0.0
  }

});

Statecovid.sync();

module.exports = Statecovid;
=======
const sequelize = require("sequelize");
// const Papa = require("papaparse");
// const fs = require("fs");
// const file = require("../db/seed.csv");

module.exports = function(sequelize, DataTypes) {
  var statecovid = sequelize.define("statecovid", {
    date: {
      type: DataTypes.DATEONLY
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
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0
    },
    death: {
      type: DataTypes.STRING,
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
>>>>>>> 1966a62d7889207cde332c8c4a1dcf25ccdc7e86
