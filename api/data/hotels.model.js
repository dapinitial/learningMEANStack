// don't forget to require this file into the bottom of the db.js connection file.

var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0 // can write 'default' to offset warning for reserved keyword.
  },
  review: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

var roomSchema = new mongoose.Schema({
  type: String,
  number: Number,
  description: String,
  photos: [String],
  price: Number
});

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
  currency: String,
  reviews: [reviewSchema],
  rooms: [roomSchema],
  location: {
    address: String,
    coordinates: {
      type: [Number],
      index: '2dsphere' // indexes on a flat plane. Geospacial data
    }// Always store coordinates in East-West, North-South aka: latitude(E/W) longitude(N/S).
  }
});

/** mongoose.model('ModelName', modelSchema, 'collection') ** If no collection
  * specified, mongoose will automagically point a reference to the "lowercase, * pluralized" form of the model name.
  */
mongoose.model('Hotel', hotelSchema);

// don't forget to require this file into the bottom of the db.js connection file.
