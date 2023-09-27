import { useState, useEffect } from "react";
import axios from "axios";

export const useSpotify = () => {
  const [error, setError] = useState(null);
  const [spotifyData, setSpotifyData] = useState<TopData>({
    songs: null,
    artists: null,
  });

  useEffect(() => {
    const getMyTopData = async () => {
      const {
        data: { artists, songs, error },
      } = await axios.get(`/api/data/myTopData`);
      if (error) {
        setError(error);
      } else {
        setSpotifyData({ artists: artists.items, songs: songs.items });
      }
    };
    getMyTopData();
  }, []);

  return {
    spotifyData,
    error,
  };
};
