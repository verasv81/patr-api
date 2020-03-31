var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeSchema = new Schema({
  title: String,
  description: String,
  images: String,
});

module.exports = mongoose.model('Home', homeSchema);