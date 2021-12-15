import React from "react";

function Right(props) {
  return (
    <svg role='button' onClick={() => props.useControls(1)}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path
        id="chevron-circle-left-solid"
        d="M23,38A15,15,0,1,1,38,23,15,15,0,0,1,23,38ZM16.111,24.028l8.2,8.2a1.446,1.446,0,0,0,2.05,0L27.385,31.2a1.446,1.446,0,0,0,0-2.05L21.24,23l6.145-6.145a1.446,1.446,0,0,0,0-2.05l-1.028-1.028a1.446,1.446,0,0,0-2.05,0l-8.2,8.2A1.453,1.453,0,0,0,16.111,24.028Z"
        transform="translate(38 38) rotate(180)"
        fill="rgba(0, 0, 0, 0.2)"
      />
    </svg>
  );
}

export default Right;
