import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import PostForm from "./PostForm";
import CreateIcon from '@material-ui/icons/Create';

function AddPost() {
  const [flag, setFlag] = useState(false);

  const switchAddMenu = () => {
    setFlag(!flag);
  };

  return (
    <div>
      {/* {!flag ? (
        <CreateIcon onClick={switchAddMenu}/>
      ) : (
        <CancelIcon onClick={switchAddMenu} />
      )} */}
      {/* {flag && <PostForm />} */}
      <PostForm />
    </div>
  );
}

export default AddPost;
