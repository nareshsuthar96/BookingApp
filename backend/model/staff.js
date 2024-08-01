const mongoose = require("mongoose")

const staffSchema = mongoose.Schema({
    Name : {type : String  , required : true} ,
    Email : {type: String  , required : true},
    Role : {type: String  , required : true}
})


module.exports = mongoose.model("staff", staffSchema)