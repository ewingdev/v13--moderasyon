const mongoose = require("mongoose");
const url = process.env.mongo;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {console.log("Mongo Bağlandı!")});
mongoose.connection.on("error", () => {console.error("Mongo Hatalı!")});