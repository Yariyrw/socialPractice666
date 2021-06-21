import axios from "axios";
import history from "../../routing/history";

export const sendDataSignUp = async (value) => {
  try {
    let result = await axios.post("https://social-practice13.herokuapp.com/sign-up", { data: value });
    let response = await result;
    if (response.data.register) {
      history.push('/sign-in');
      window.location.reload();
    }
    else {
      localStorage.setItem('errorSignUp',response.data.register)
    }
  } catch (err) {
    throw err;
  }
};
