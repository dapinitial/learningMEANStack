// don't forget to require this file into the bottom of the db.js connection file.

var mongoose = require('mongoose');

var hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    min: 0,
    max: 5,
    default: 0 // can write 'default' to offset warning for reserved keyword.
  },
  services: [String],
  description: String,
  photos: [String],
  currency: String
});

/** mongoose.model('ModelName', modelSchema, 'collection') ** If no collection
  * specified, mongoose will automagically point a reference to the "lowercase, * pluralized" form of the model name.
  */
mongoose.model('Hotel', hotelSchema);

// don't forget to require this file into the bottom of the db.js connection file.
