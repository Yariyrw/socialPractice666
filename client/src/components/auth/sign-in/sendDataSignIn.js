import axios from "axios";
import history from "../../routing/history";

export const sendDataSignIn = async (value) => {
  try {
    let result = await axios.post("https://navigator-practice.herokuapp.com/sign-in", { data: value });
    let response = await result;
    localStorage.setItem("user", response.data.dataUser);
    localStorage.setItem("token", response.data.webToken);
    
    if (response.data.success) {
      history.push("/articles");
      window.location.reload("/articles");
    }
    return response;
  } catch (err) {
    throw err;
  }
};
