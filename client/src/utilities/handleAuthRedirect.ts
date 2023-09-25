import axios from "axios"

export const handleAuthRedirect = async () => {
  const { data } = await axios.get(`/api/auth/getRedirect`);
  window.location = data;
  // const { data } = await axios.get(`/api/test`);
  // console.log(data)
}