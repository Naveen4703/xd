const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName : {
        type : String
    },
    regNumber : {
        type : String
    },
    collegeName : {
        type : String
    },
    graduation : {
        type : String
    },
    branch : {
        type : String
    },
    year : {
        type : Number
    },
    phoneNumber : {
        type : Number
    },
    whatsappNumber : {
        type : Number
    },
    email : {
        type : String
    },
    gender : {
        type : String
    },
    state : {
        type : String
    },
    district : {
        type : String
    },
    courseMode : {
        type : String
    },
    courseType : {
        type : String
    },
    course : {
        type : String
    }
},
    {
        timestamps : true
    }
);

module.exports = mongoose.model("Student", studentSchema);
