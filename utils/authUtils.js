const axios = require("axios");

// @desc    get access and refresh tokens and save them as global vars
// @params  auth_code OR refresh_token
const getTokensWithCode = async (
  auth_code,
  req,
  grant_type = "authorization_code"
) => {
  try {
    const payload = {
      grant_type,
      code: auth_code,
      redirect_uri: process.env.REDIRECT_URI,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const spotifyResponse = await axios.post(
      `${process.env.SPOTIFY_ACCOUNT_URL}/api/token`,
      payload,
      config
    );

    console.log("auth_code: ", auth_code);
    console.log("spotifyResponse: ", spotifyResponse);
    req.app.locals.access_token = spotifyResponse.data.access_token;
    req.app.locals.refresh_token = spotifyResponse.data.refresh_token;

    return spotifyResponse;
  } catch (error) {
    console.log("tokenError: ", error.response.data);
    return { error: error.response.data };
  }
};
module.exports = {
  getTokensWithCode
}
