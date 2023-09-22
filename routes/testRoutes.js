const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const {newCode} = req.query;
  console.log('newCode: ', newCode);
  req.app.locals.access_token = newCode
  const str = req.app.locals.theThing;
  res.send(`${str}`);
})

router.get("/token", async (req, res) => {
  const token = req.app.locals.access_token;
  res.send(`Token: ${token}`);
})

module.exports = router;