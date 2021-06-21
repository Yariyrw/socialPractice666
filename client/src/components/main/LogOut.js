import {Link} from 'react-router-dom';

function LogOut () {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
    localStorage.removeItem('posts')
    localStorage.removeItem('membersPost')

    return (
        <div>
            <Link to='/'>Exit</Link>
        </div>
    )
}

export default LogOut;