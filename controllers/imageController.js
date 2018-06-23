const db = require("../models");

// Defining methods for the ImageController
module.exports = {
  findAll: function(req, res) {
    db.Image.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Image.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Image.create(req.body)
      .then(dbModel => {
        console.log("req.params.id = " + JSON.stringify(req.body.id));
        console.log("dbModel = " + dbModel);
        return db.Artist.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { image: dbModel._id } },
          { new: true }
        );
      })
      .then(function(Artist) {
        // If the User was updated successfully, send it back to the client
        console.log("SUCCESS");
        res.json(Artist);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Image.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Image.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
