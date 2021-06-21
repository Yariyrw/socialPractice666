import FindInPageIcon from '@material-ui/icons/FindInPage';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';

function AllMemberPost () {
    const [flag,setFlag] = useState(false);

    return (
        <div>
            <Link to='/all-member-post' style={{'color':'black'}}>
                <GroupIcon />
            </Link>
        </div>
    )
}
export default AllMemberPost;