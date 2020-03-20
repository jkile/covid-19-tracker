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
<<<<<<< HEAD
  });

  // Get route for returning statecovids of a specific state
  app.get("/api/statecovids/state/:state", function (req, res) {
=======
  })
    // Get route for returning statecovids of a specific state
    app.get("/api/statecovids/state/:state", function (req, res) {
>>>>>>> d5593e41c7e3443d85bf4341d820c3e23c9dd45e

    db.stateCovid
      .findAll({
        where: {
          state: req.params.state
        }
      })
<<<<<<< HEAD

=======
>>>>>>> d5593e41c7e3443d85bf4341d820c3e23c9dd45e
      .then(function (dbstateCovid) {
        res.json(dbstateCovid);
      });
  });

  // Get route for retrieving a single stateCovid date
  app.get("/api/statecovids/:date", function (req, res) {

    db.stateCovid
      .findOne({
        where: {
          date: req.params.date
        }
      })
<<<<<<< HEAD

=======
>>>>>>> d5593e41c7e3443d85bf4341d820c3e23c9dd45e
      .then(function (dbstateCovid) {
        res.json(dbstateCovid);
      });
  });

}
