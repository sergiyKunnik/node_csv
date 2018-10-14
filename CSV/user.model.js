let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username: {
        type: String,
        require: true,
    },
    FirstName: {
        type: String,
        require: true,
    },
    LastName: {
        type: String,
        require: true,
    },
    Age: {
        type: Number,
        require: true,
    },
})

  
module.exports = mongoose.model('User', userSchema);
  