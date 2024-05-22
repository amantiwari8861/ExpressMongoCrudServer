const mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username:String,
    password:String,
    email:String,
    age: Number,
    salary: Number,
    isMarried:Boolean,
    dob:Date,
    skills:Array
});
const User = mongoose.model('User', userSchema);
module.exports = User;

// Model -> interact with Database (or store data that is received/sent from/to backend )
