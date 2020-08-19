const express = require("express")
const mongoose = require("mongoose");
const routes = require("./routes/question-route");
const bodyParser = require("body-parser");

const app = express()

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mydb", {
  useCreateIndex: true,
  useNewUrlParser: true
}
);


app.get("/",(req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log("Server is running");
});


