import SongList from "./Components/SongList";
import { handleAuthRedirect } from "../../utilities/handleAuthRedirect";
import ArtistsList from "./Components/ArtistsList";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { BiExit } from "react-icons/bi";
import { ExitBtn, TopDataWrapper } from "./MyTopData.styles";
import { PageWrapper } from "../../shared.styles";
import { useNavigate } from "react-router-dom";
import { useSpotify } from "../../hooks/useSpotify";

const MyTopData = () => {
  const navigate = useNavigate();
  const { error, spotifyData } = useSpotify();

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
    <TopDataWrapper>
      <ExitBtn onClick={() => navigate("/")}>
        Exit
        <BiExit />
      </ExitBtn>
      <ArtistsList artists={spotifyData.artists ?? []} />
      <SongList songs={spotifyData.songs ?? []} />;
    </TopDataWrapper>
  );
};

export default MyTopData;
