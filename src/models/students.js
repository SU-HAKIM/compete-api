const mongoose = require("mongoose");
const validator = require("validator");


//? students schema

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id all ready present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Syntax.")
            }
        }
    },
    phone: {
        type: Number,
        minlength: 2,
        maxlength: 2,
        required: true,
        unique:true
    },
    address: {
        type: String,
        require:true
    }
})


//? students model

const Students=new mongoose.model("Student",studentSchema)


module.exports=Students