const { auth } = require("express-openid-connect");
const { requiresAuth } = require("express-openid-connect");
//import App from "../client/src/App";

const express = require("express");
const mongoose = require("mongoose");
const Reading = require("./models/productModel");
const User = require("./models/userModel");
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "sZT7WA0KPxUPC4ypEf57",
  baseURL: "http://localhost:3000",
  clientID: "T5jOoFN11REVoNfvCfRIGeoweLVo3Afp",
  issuerBaseURL: "https://dev-lb4i8mzz3vnmeana.us.auth0.com",
};

app.use(express.json());
app.use(auth(config));

//change test

//routes

//base route
app.get("/", (req, res) => {
  res.send("Hello this is the home port11");
  res.send(req.oidc.isAuthenticated());
  req.oidc.isAuthenticated ? res.send("true") : res.send("false");
});

//login
//app.get("/login", (req, res) =>
//  res.oidc.login({
//    returnTo: "/profile",
//    authorizationParams: {
//      redirect_uri: "http://localhost:3000/callback",
//    },
//  })
//);

app.get("/profile", requiresAuth(), async (req, res) => {
  try {
    const user = req.oidc.user;
    res.status(200).json({ profile: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }

  //res.send(JSON.stringify(req.oidc.user));
  //console.log(req.oidc.user);
});

app.get("/test", (req, res) => {
  res.send("Hello this the test page");
});
//retuens all posts in database
app.get("/readings", async (req, res) => {
  try {
    const readings = await Reading.find();
    res.status(200).json({ readingsList: readings });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//returns post by id
app.get("/readings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reading = await Reading.findById(id);
    res.status(200).json({ read: reading });
    //console.log("got element by id");
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
//sends reading to database
app.post("/reading", async (req, res) => {
  try {
    const reading = await Reading.create(req.body);
    res.status(200).json(reading);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

//update the reading
app.put("/readings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reading = await Reading.findByIdAndUpdate(id, req.body);
    if (!reading) {
      return res.status(500).json({ message: "Cannot find reading" });
    }
    const updatedReading = await Reading.findById(id);
    res.status(200).json(reading);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//delete a reading
app.delete("/readings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reading = await Reading.findByIdAndDelete(id);
    if (!reading) {
      return res.status(404).json({ message: "Cannot find reading" });
    }
    res.status(200).json(reading);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//database connection ( mongoDB)
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:Corrie2002@flipbook.cp0twbh.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(5000, () => {
      console.log("node api app is running on port 5000 TEST");
    });
  })
  .catch((error) => {
    console.log(error);
  });
