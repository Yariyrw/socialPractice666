import axios from 'axios';

export const queryMemberServer = async() => {
    console.log('s')
    try {
        let result = await axios.get('https://navigator-practice.herokuapp.com/all-member-post');
        let response = await result;
        return response.data
    }catch(err) {
        throw err;
    }
}