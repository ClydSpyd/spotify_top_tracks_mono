import axios from "axios";
import { useEffect, useState } from "react";
import SongList from "./Components/SongList";
import { handleAuthRedirect } from "../../utilities/handleAuthRedirect";
import ArtistsList from "./Components/ArtistsList";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { BiExit } from "react-icons/bi";
import { ExitBtn } from "./MyTopData.styles";
import { PageWrapper } from "../../shared.styles";
import { useNavigate } from "react-router-dom";

const MyTopData = () => {
  const navigate = useNavigate();
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
        console.log(artists);
        setSpotifyData({ artists: artists.items, songs: songs.items });
      }
    };
    setTimeout(() => {
      getMyTopData();
    }, 500);
  }, []);

  if (error)
    return (
      <div className="errorContainer">
        <h4>{error}</h4>
        <button onClick={handleAuthRedirect}>Retry</button>
      </div>
    );

  if (Object.values(spotifyData).some((i) => !i)) {
    return <LoadingScreen />;
  }

  return (
    <PageWrapper>
      <ExitBtn onClick={() => navigate("/")}>
        Exit
        <BiExit />
      </ExitBtn>
      <ArtistsList artists={spotifyData.artists ?? []} />
      <SongList songs={spotifyData.songs ?? []} />;
    </PageWrapper>
  );
};

export default MyTopData;

// const [ genres, setGenres ] = useState<string[]>([]);

// useEffect(() => {

//   if(!spotifyData.artists) return;
//   const myGenres: string[] = spotifyData.artists.reduce(
//     (output: string[], current: ArtistData) =>
//       (output = [...output, ...current.genres.slice(0, 5)]),
//     []
//   );
//   // console.log(myGenres);
//   const sortGenres = (arr: string[]) => {
//     var freq: { [key: string]: number } = {};
//     for (var s in arr) {
//       console.log(s);
//       freq[arr[s]] = freq[arr[s]] ? freq[s] + 1 : 0;
//     }
//     arr.sort(function (a, b) {
//       return freq[a] > freq[b] ? -1 : 1;
//     });
//     console.log("req: ", freq);
//     for (var i = arr.length - 1; i > 0; i--)
//       if (arr[i] === arr[i - 1]) arr.splice(i, 1);
//     return arr;
//   }

//     const mySorted = sortGenres(myGenres);

//     console.log(myGenres);
//     console.log(mySorted);

// },[spotifyData.artists])
