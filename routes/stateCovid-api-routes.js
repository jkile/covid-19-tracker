
// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/statecovid", function (req, res) {
    db.statecovid.findAll().then(function (result) {
      return res.json(result);
    });
  });

  // // Get route for returning statecovids of a specific state
  // app.get("/api/statecovid/state/:state", function (req, res) {
  //   statecovid.findAll({
  //     where: {
  //       state: req.params.state
  //     }
  //   })
  //     .then(function (dbstateCovid) {
  //       res.json(dbstateCovid);
  //     });
  // });

  // // Get route for retrieving a single stateCovid date
  // app.get("/api/statecovid/:dateOf", function (req, res) {
  //   statecovid.findOne({
  //     where: {
  //       dateOf: req.params.dateOf
  //     }
  //   })
  //     .then(function (dbstateCovid) {
  //       res.json(dbstateCovid);
  //     });
  // });
};
