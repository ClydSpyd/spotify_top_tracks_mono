const express = require("express");
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

app.use("/auth", authRoutes);
app.use("/test", testRoutes);
app.use("/data", dataRoutes);

app.get('/', (req, res) => res.send('🚀🎧🎶🚀🎧🎶🚀🎧🎶🚀🎧🎶'))

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT ${PORT}`)
});
