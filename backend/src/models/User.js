const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    /**
     * se tiver outras info do user é colocada aqui. Ex:
     * name: String,
     * age: Number,
     * active: Boolean,
     * usando tipos primitivos do JS
     */
    email: String,
})

module.exports = mongoose.model('User', UserSchema);