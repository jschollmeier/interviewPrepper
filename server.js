const express = require("express")
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const { route } = require("./routes");

const app = express()

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/notetaker", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
 
}).then(() => {
  console.log("connected to mongodb");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);



app.listen(PORT, () => {
  console.log("Server is running");
});


