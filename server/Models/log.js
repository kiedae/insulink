const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LogSchema = new Schema({
    date: String,
    time: String,
    bsugar: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
});

const Log = mongoose.model('Log', LogSchema);

module.exports = {
  Log,
  LogSchema
};