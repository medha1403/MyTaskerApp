let mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb+srv://medha_a_:gudda2314@cluster0.o1bhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// );
mongoose.connect(
  "mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

let schema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("tasks", schema);
