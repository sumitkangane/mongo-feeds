var mongoose = require("mongoose");
var Feed = require("../models/feed");

var feedController = {};

// Show list of feed
feedController.list = function(req, res) {
  Feed.find({}).exec(function (err, feed) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/feed/index", {feed: feed});
    }
  });
};

// Show feed by id
feedController.show = function(req, res) {
  Feed.findOne({_id: req.params.id}).exec(function (err, feed) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/feed/show", {feed: feed});
    }
  });
};

// Create new feed
feedController.create = function(req, res) {
  res.render("../views/feed/create");
};

// Save new feed
feedController.save = function(req, res) {
  var feed = new Feed(req.body);

  feed.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/feed/create");
    } else {
      console.log("Successfully created an feed.");
      res.redirect("/feed/show/"+feed._id);
    }
  });
};

// Edit an feed
feedController.edit = function(req, res) {
  Feed.findOne({_id: req.params.id}).exec(function (err, feed) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/feed/edit", {feed: feed});
    }
  });
};

// Update an feed
feedController.update = function(req, res) {
  Feed.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, description: req.body.description, link: req.body.link, price: req.body.price }}, { new: true }, function (err, feed) {
    if (err) {
      console.log(err);
      res.render("../views/feed/edit", {feed: req.body});
    }
    res.redirect("/feed/show/"+feed._id);
  });
};

// Delete an feed
feedController.delete = function(req, res) {
  Feed.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Feed deleted!");
      res.redirect("/feed");
    }
  });
};

module.exports = feedController;
