const express = require("express");
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes.js");
const testRoutes = require("./routes/testRoutes.js");
const dataRoutes = require("./routes/dataRoutes.js");


const app = express();
const PORT = process.env.PORT || 6969;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extedned: true }));
app.use(cors());

app.locals.access_token;
app.locals.refresh_token;

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/data", dataRoutes);

app.get('/api', (req, res) => res.send('🚀🎧🎶🚀🎧🎶🚀🎧🎶🚀🎧🎶'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT ${PORT}`)
});
