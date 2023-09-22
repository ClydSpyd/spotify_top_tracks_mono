const express = require("express");
const router = express.Router();
const { getTopItems } = require("../utils/getSpotifyData");
const tokenMiddle = require("../middleware/tokenMiddle");
const { getTokensWithCode } = require("../utils/authUtils");

// spotify time_range values:
// "long_term" - calculated from several years of data and including all new data as it becomes available) 
// "medium_term" - approximately last 6 months 
// "short_term" - approximately last 4 weeks

// @params for all 3 routes(optional) 
//                    limit={number, max 50}
//                    time_range={valid time_range}

// @route   GET/data/myTopSongs
// @desc    return authorized user's top songs
router.get("/myTopSongs", tokenMiddle, async (req, res) => {
  console.log('getSongs')
  const songs = await getTopItems(req.token, 'tracks');
  res.json(songs);
})

// @route   GET/data/myTopArtists
// @desc    return authorized user's top artists
router.get("/myTopArtists", tokenMiddle, async (req, res) => {
  console.log('getArtists')
  const artists = await getTopItems(req.token, 'artists');
  res.json(artists);
})

// @route   GET/data/myTopData
// @desc    return authorized user's top songs AND artists
router.get("/myTopData", tokenMiddle, async (req, res) => {
  console.log('getCombinedData')
  try {
    const songs = await getTopItems(req.token, 'tracks', req.query.time_range, req.query.limit);
    const artists = await getTopItems(req.token, 'artists');
    res.json({artists, songs});
  } catch (error) {
    if(error.response.data.error.message === 'The access token expired'){
      console.log('ööÖöö')
      getTokensWithCode(req.app.locals.refresh_token);
    }
    res.json({ error: error.response.data.error.message });
  }
})

module.exports = router;