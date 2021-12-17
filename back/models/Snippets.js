const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let snippetSchema = new Schema ({
    code: {type:String},
    comments: [{comment:String}]
    //comments: [{ commentor: String, comment: String }]

})

module.exports = mongoose.model("Snippet", snippetSchema)