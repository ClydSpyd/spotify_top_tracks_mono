import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import AuthCallback from "./Components/AuthCallback/AuthCallback";
import MyTopData from "./Components/MyTopData/MyTopData";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.dark};
`;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/callback"} element={<AuthCallback />} />
        <Route path={"/dashboard"} element={<MyTopData />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
