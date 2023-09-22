const axios = require("axios");

// @params  auth_code OR refresh_token
const getTokensWithCode = async (auth_code, req) => {
  try {
    const payload = {
      grant_type: "authorization_code",
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

    req.app.locals.access_token = spotifyResponse.data.access_token;
    req.app.locals.refresh_token = spotifyResponse.data.refresh_token;

    return spotifyResponse;
  } catch(error){
    console.log(auth_code)
    console.log(error.response.data)
    // throw new Error(error.response.data);
    return { error: error.response.data}
  }

};
module.exports = {
  getTokensWithCode
}
