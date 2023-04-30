const Delete = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}
    >
      <mask
        id="a"
        width={20}
        height={20}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="#C4C4C4" d="M0 0h20v20H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#31373D"
          d="M7.188 15.833h5.625c.138 0 .26-.052.364-.156a.497.497 0 0 0 .156-.364V7.5H6.667v7.813c0 .138.052.26.156.364a.498.498 0 0 0 .364.156Zm-2-10.312v-.833H7.25l.833-.834h3.834l.833.834h2.063v.833H5.187Zm2 11.146a1.314 1.314 0 0 1-1.354-1.354V6.667h8.333v8.646a1.316 1.316 0 0 1-1.354 1.354H7.186Zm-.521-.834h6.666-6.666Z"
        />
      </g>
    </svg>
  );
};

export default Delete;
