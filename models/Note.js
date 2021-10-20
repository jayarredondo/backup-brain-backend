const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { model } = require('./User');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    author: {type: mongoose.Types.ObjectId, required: true, ref: 'User'}
})

module.exports = mongoose.model('Note', noteSchema);