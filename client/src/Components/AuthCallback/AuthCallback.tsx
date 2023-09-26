import { parse } from "querystring";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CallbackWrapper } from "./AuthCallback.styles";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

function AuthCallback() {
  const [error, setError] = useState(null);
  const { code } = parse(window.location.search.slice(1));
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const {
        data: { success, error },
      } = await axios.get(`/api/auth/getToken?code=${code}`);
      console.log(success);
      if (success) {
        navigate("/dashboard");
      } else if (error) {
        setError(error);
      }
    };
    if (code) getToken();
  }, [code, navigate]);

  return error ? (
    <CallbackWrapper>
      <h1>{error}</h1>
    </CallbackWrapper>
  ) : (
    <LoadingScreen />
  );
}

export default AuthCallback;
