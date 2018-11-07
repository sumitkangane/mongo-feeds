var mongoose = require('mongoose');

var FeedSchema = new mongoose.Schema({
  name: String,
  description: String,
  link: String,
  price: Number,
  timestamps: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feed', FeedSchema);
