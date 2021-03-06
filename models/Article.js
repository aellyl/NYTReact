//create article model for mongoose

var mongoose = require("mongoose");

//this is a schema object from mongoose
var Schema=mongoose.Schema;

//create article schema
var ArticleSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    date:{
        type: Date
    },
    url:{
        type: String
    },
    snippet:{
        type:String
    },
    saveDT:{
        type: Date,
        default:Date.now
    }

});

//create a model from ArticleSchema
//this will creatt the collection in mongo
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;