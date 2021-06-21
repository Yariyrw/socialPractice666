import React,{useEffect, useState} from 'react';
import { queryMemberServer } from './queryMemberServer';
import CardUser from './CardUser';
import Loader from '../../loader/Loader';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


const useStyles = makeStyles(({ palette }) => ({
    wrapper : {
        display:'flex',
        flexWrap:'wrap',
        margin: "2rem",
        justifyContent:'center'
    }
  }));


function AllMembersPage () {
    const [data,setData] = useState({})
    const [limit,setLimit] = useState(true)
    const queryData = queryMemberServer();
    const classes = useStyles();

    if (limit) {
        setLimit(false);
            queryData.then(res => {
                setData(res.dataAllMember)
            })
    }

    console.log(data);
    
    return (
        <div className={classes.wrapper}>
            { data.length && <Link to='/articles' >
            <ArrowBackIosIcon />
            </Link>}
            {data.length  ? data.map((el,i) => 
            <div >
                <CardUser loginUser={el.login} postUsers={el.posts} userId={el.id}/>
            </div>
            ) : 
                <Loader />
            }
        </div>
    )
}

export default AllMembersPage;