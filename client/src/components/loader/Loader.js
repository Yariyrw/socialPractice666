import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">      
      <ClipLoader color={'orange'} loading={loading} css={override} size={50} />
    </div>
  );
}

export default Loader;