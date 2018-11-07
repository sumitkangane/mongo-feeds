var express = require('express');
var router = express.Router();
var feed = require("../controllers/feedcontroller.js");

// Get all feed
router.get('/', function(req, res) {
  feed.list(req, res);
});

// Get single feed by id
router.get('/show/:id', function(req, res) {
  feed.show(req, res);
});

// Create feed
router.get('/create', function(req, res) {
  feed.create(req, res);
});

// Save feed
router.post('/save', function(req, res) {
  feed.save(req, res);
});

// Edit feed
router.get('/edit/:id', function(req, res) {
  feed.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  feed.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  feed.delete(req, res);
});

module.exports = router;
