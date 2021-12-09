import React from "react";

function Plane(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.25"
      height="26.258"
      viewBox="0 0 26.25 26.258"
    >
      <path
        d="M24.416.135.65,13.846a1.231,1.231,0,0,0,.113,2.215l5.451,2.287L20.945,5.365a.307.307,0,0,1,.441.426L9.034,20.84v4.128a1.23,1.23,0,0,0,2.179.81l3.256-3.964,6.389,2.677a1.234,1.234,0,0,0,1.692-.933L26.242,1.407A1.231,1.231,0,0,0,24.416.135Z"
        transform="translate(-0.01 0.031)"
        fill={props.fill}
      />
    </svg>
  );
}

export default Plane;
