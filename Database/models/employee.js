const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    empid : { type : String},
    firstname : { type : String},
    lastname : { type : String},
    dob : { type: String },
    mobileno : { type: Number},
    city : { type : String },
    address : { type : String},
});

module.exports = Employee;  