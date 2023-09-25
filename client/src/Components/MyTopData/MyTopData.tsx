import axios from "axios";
import { useEffect, useState } from "react";
import SongList from "./Components/SongList";
import { handleAuthRedirect } from "../../utilities/handleAuthRedirect";
import ArtistsList from "./Components/ArtistsList";

const  MyTopData = () => {
  const [spotifyData, setSpotifyData] = useState<TopData>({
    songs: null,
    artists: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMyTopData = async () => {
      const {
        data: { artists, songs, error },
      } = await axios.get(`/api/data/myTopData`);
      if (error) {
        setError(error);
      } else {
        console.log(artists)
        setSpotifyData({ artists: artists.items, songs: songs.items });
      }
    };
    setTimeout(() => {
      getMyTopData();
    }, 500);
  }, []);

  if(error) return(
    <div className="errorContainer">  
      <h4>{error}</h4>
      <button onClick={handleAuthRedirect}>Retry</button>
    </div>
  )

  if(Object.values(spotifyData).some(i => !i)){
    return(
      <h1>LÖADING</h1>
    )
  }

  return (
    <>
      <ArtistsList artists={spotifyData.artists ?? []} />
      <SongList songs={spotifyData.songs ?? []} />;
    </>
  );
}

export default MyTopData;
