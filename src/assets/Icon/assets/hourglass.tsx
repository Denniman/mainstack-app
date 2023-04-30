const Hourglass = ({ ...props }) => {
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
        <path fill="#D9D9D9" d="M0 0h20v20H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#31373D"
          d="M6.917 16.667h6.166v-2.5c0-.945-.291-1.768-.875-2.47-.583-.7-1.32-1.051-2.208-1.051-.889 0-1.625.35-2.208 1.051-.584.702-.875 1.525-.875 2.47v2.5ZM10 9.354c.889 0 1.625-.35 2.208-1.052.584-.701.875-1.524.875-2.469v-2.5H6.917v2.5c0 .945.291 1.768.875 2.469.583.701 1.32 1.052 2.208 1.052Zm5.25 8.146H4.75a.39.39 0 0 1-.302-.125.417.417 0 0 1-.115-.292.41.41 0 0 1 .115-.302.408.408 0 0 1 .302-.114h1.333v-2.5c0-.959.268-1.827.802-2.604A3.86 3.86 0 0 1 9.042 10a3.86 3.86 0 0 1-2.157-1.563 4.494 4.494 0 0 1-.802-2.604v-2.5H4.75a.389.389 0 0 1-.302-.125.417.417 0 0 1-.115-.291c0-.125.039-.226.115-.303A.408.408 0 0 1 4.75 2.5h10.5c.125 0 .226.042.303.125.076.083.114.18.114.292a.407.407 0 0 1-.114.301.409.409 0 0 1-.303.115h-1.333v2.5c0 .959-.268 1.827-.802 2.604A3.86 3.86 0 0 1 10.958 10a3.86 3.86 0 0 1 2.157 1.563c.534.777.802 1.645.802 2.604v2.5h1.333c.125 0 .226.041.303.125.076.083.114.18.114.291a.41.41 0 0 1-.114.303.41.41 0 0 1-.303.114Z"
        />
      </g>
    </svg>
  );
};

export default Hourglass;
