var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var searchHisSchema = new Schema({
  keyword: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false
  },
  __v: { type: Number, select: false },
});

module.exports = mongoose.model("SearchHis", searchHisSchema, "search_his");
