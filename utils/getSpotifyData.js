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

module.exports = {
  getTopItems,
};
