const express = require("express");
const router = express.Router();
const querystring = require("querystring");
const { getTokensWithCode } = require("../utils/authUtils");

const scopes = ["user-top-read", "user-read-recently-played"];

// @route   GET/auth/getRedirect
// @desc    get oAuth reroute URL to redirect client to Spotify auth UI
// @params  none
router.get("/getRedirect", async (req, res) => {
  const authEndpoint = `${process.env.SPOTIFY_ACCOUNT_URL}/authorize`;
  const redirectParams = querystring.stringify({
    client_id: process.env.CLIENT_ID,
    response_type: "code",
    redirect_uri: process.env.REDIRECT_URI,
    scope: scopes.join("%20"),
  });
  const redirect = `${authEndpoint}?${redirectParams}`;
  res.send(redirect);
});

// @route   GET/auth/getToken
// @desc    exchange auth code for access and refresh tokens, save as global vars
// @params  code={AUTH CODE RECEIVED FROM SPOTIFY CALLBACK}
router.get("/getToken", async (req, res) => {
  console.log("CODE: ", req.query.code);

  try {
    await getTokensWithCode(req.query.code, req);

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error.response.data);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
