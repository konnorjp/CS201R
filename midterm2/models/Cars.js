var mongoose = require('mongoose');
var CarSchema = new mongoose.Schema({
  speaker: String,
  session: String,
  title: String,
  url: String,
  upvotes: {type: Number, default: 0},
});
CarSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Car', CarSchema);
