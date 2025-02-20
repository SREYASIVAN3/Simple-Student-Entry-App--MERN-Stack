const mongoose =require("mongoose");
const studentSchema = new mongoose.Schema({
    stud_name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },

    stud_dept:{
        type:String,
        required:[true,"Department is Missing"],
        trim:true
    },
    emailid:{
        type:String,
        required:[true,"Enter email id"],
        lowercase:true
    },
    marks:{
        type:Number,
        min:[50,"Low marks entered"],
        required:[true,"Mark should not be empty"],
    },
        simage:{
            type:String
        }
})

const Student =mongoose.model("Student",studentSchema);
module.exports=Student;