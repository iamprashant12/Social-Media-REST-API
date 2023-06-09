const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

dotenv.config();

mongoose.connect("mongodb://localhost:27017/social", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.get("/", function(req, res){
    res.send("Hello World");
})

app.listen(8800, () => {
  console.log("Server is running at 8800 port");
});
