// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the covid
  app.get("/api/statecovid", function (req, res) {

    db.statecovid.findAll({})
      .then(function (dbstateCovid) {
        res.json(dbstateCovid);
      });
  })
    // Get route for returning statecovids of a specific state
    app.get("/api/statecovid/state/:state", function (req, res) {

    db.stateCovid
      .findAll({
        where: {
          state: req.params.state
        }
      })
      .then(function (dbstateCovid) {
        res.json(dbstateCovid);
      });
  });

  // Get route for retrieving a single stateCovid date
  app.get("/api/statecovid/:date", function (req, res) {

    db.stateCovid
      .findOne({
        where: {
          date: req.params.date
        }
      })
      .then(function (dbstateCovid) {
        res.json(dbstateCovid);
      });
  });

}
