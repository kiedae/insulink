const mongoose = require('mongoose');
const LogSchema = require('./log');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true},
    email: { type: String, unique: true},
    password: String,
    logs: [LogSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

