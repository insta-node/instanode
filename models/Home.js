const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HomeSchema = new Schema({ 
    firstName: String, 
    lastName: String
 }, { collection: 'UserLists' });

module.exports = mongoose.model('home', HomeSchema);
