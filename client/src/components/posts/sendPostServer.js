import transitions from '@material-ui/core/styles/transitions';
import axios from 'axios';

export const sendPostServer = async(value,login,funcData) => {
    funcData(true)
    try {
        let users = {user:login[0]}
        let result = await axios.post('https://social-practice13.herokuapp.com/create-post',{data:{...value,...users}});
        let response = await result;
        return response;
    }catch(err) {
        throw err;
    }
}