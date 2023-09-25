const axios = require("axios");

const getTopItems = async (
  token,
  type = "tracks",
  time_range = "medium_term",
  limit = 50
) => {
  console.log("limit: ", limit);
    const payload = {
      params: {
        limit,
        time_range,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const { data } = await axios.get(
      `https://api.spotify.com/v1/me/top/${type}`,
      payload
    );
    return data;
};

const getMyTopData = async (req, retry = false) => {
  try {
    const songs = await getTopItems(
      req.token,
      "tracks",
      req.query.time_range,
      req.query.limit
    );
    const artists = await getTopItems(req.token, "artists");
    return { artists, songs };
  } catch (error) {
    console.log("errör :", error.response);
    const isExpiredToken =
      error.response?.data?.error?.message === "The access token expired";
    if (!retry && isExpiredToken) {
      console.log("ööÖöö");
      getTokensWithCode(req.app.locals.refresh_token, req, "refresh_token");
      getMyTopData(req, true);
    } else {
      return { error: error.response.data.error };
    }
  }
};

module.exports = {
  getTopItems,
  getMyTopData
};
