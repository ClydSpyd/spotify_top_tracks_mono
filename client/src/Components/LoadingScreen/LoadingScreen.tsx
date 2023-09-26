import loader from "../../assets/svg/pulse2.svg";
import { Loader, LoaderWrapper, ScreenWrapper } from "./LoadingScreen.styles";

type Props = {};

const LoadingScreen = (props: Props) => {
  return (
    <ScreenWrapper>
      <LoaderWrapper>
        <Loader src={loader} />
        <p>Loading...</p>
      </LoaderWrapper>
    </ScreenWrapper>
  );
};

export default LoadingScreen;
