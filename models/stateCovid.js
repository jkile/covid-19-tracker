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
