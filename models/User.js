const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, unique: true, minlength: 6},
    taskList: [{type: mongoose.Types.ObjectId, required: true, ref: 'Task'}],
    notes: [{type: mongoose.Types.ObjectId, required: true, ref: 'Note'}],
    dailyItems: [{type: mongoose.Types.ObjectId, required: true, ref: 'DailyItem'}]
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);