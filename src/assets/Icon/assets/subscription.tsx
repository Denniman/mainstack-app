const Subscription = ({ ...props }) => {
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
          d="M6.25 3.708v-.833h7.5v.833h-7.5Zm-2.5 2.313v-.833h12.5v.833H3.75ZM3.854 17.5A1.314 1.314 0 0 1 2.5 16.146V8.854A1.314 1.314 0 0 1 3.854 7.5h12.292A1.316 1.316 0 0 1 17.5 8.854v7.292a1.316 1.316 0 0 1-1.354 1.354H3.854Zm0-.833h12.292c.139 0 .26-.053.364-.157a.498.498 0 0 0 .157-.364V8.854a.498.498 0 0 0-.157-.364.498.498 0 0 0-.364-.157H3.854a.498.498 0 0 0-.364.157.498.498 0 0 0-.157.364v7.292c0 .139.053.26.157.364a.498.498 0 0 0 .364.157Zm4.896-1.605 3.854-2.562L8.75 9.937v5.126Z"
        />
      </g>
    </svg>
  );
};

export default Subscription;
