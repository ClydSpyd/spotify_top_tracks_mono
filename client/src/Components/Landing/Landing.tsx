import { useState } from 'react';
import { handleAuthRedirect } from "../../utilities/handleAuthRedirect"
import { Button, Content, Icons, ImageWrapper, LandingWrapper, MainImage, NoteIcon, PoweredBy, SpotifyLogo } from "./Landing.styles"
import landingImage from "../../assets/images/landing-image1.jpg";
import logo from "../../assets/images/spotify-logo.svg";
import loader from "../../assets/svg/spinner.svg";
import { ImSpotify } from 'react-icons/im';
import { SiYoutubemusic } from 'react-icons/si';
import { ImHeadphones } from 'react-icons/im';
type Props = {}

const Landing = (props: Props) => {
  const [ loading, setLoading ] = useState(false)

  const handleLogin = () => {
    setLoading(true);
    handleAuthRedirect();
  }

  return (
    <LandingWrapper>
      <ImageWrapper>
        <h1>YOUR TOP PICKS</h1>
        <PoweredBy>
          Powered By
          <SpotifyLogo src={logo} />
        </PoweredBy>
        <MainImage src={landingImage} />
      </ImageWrapper>
      <Content>
        <Icons>
          <SiYoutubemusic />
          <ImHeadphones />
          <NoteIcon />
        </Icons>
        <h3>
          Using your Spotify listening data, find out what your top tracks,
          artists and albums are. We will also give you some exciting new
          recommendations based on your preferences!
        </h3>
        <Button onClick={handleLogin}>
          {loading ? (
            <img className="spinner" src={loader} alt={"spinner"} />
          ) : (
            <>
              <ImSpotify className="spotify" />
              LET'S GO
            </>
          )}
        </Button>
      </Content>
    </LandingWrapper>
  );
}

export default Landing