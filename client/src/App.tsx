import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import AuthCallback from "./Components/AuthCallback/AuthCallback";
import MyTopData from "./Components/MyTopData/MyTopData";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing/>} />
      <Route path={"/callback"} element={<AuthCallback />} />
      <Route path={"/dashboard"} element={<MyTopData />} />
    </Routes>
  );
}

export default App;
