import axios from 'axios';

export const queryPost = async(user) => {
    try {
        let users = {name:user}
        let result = await axios.post('https://navigator-practice.herokuapp.com/get-post',{data:users});
        let response = await result;
        localStorage.setItem('posts',JSON.stringify(response.data.postData))
    }catch(err) {
        throw err;
    }
}