const Dashboard = ({ ...props }) => {
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
          fill="#FF5403"
          d="M11.25 7.5V3.333h5.417V7.5H11.25ZM3.333 10V3.333H8.75V10H3.333Zm7.917 6.667V10h5.417v6.667H11.25Zm-7.917 0V12.5H8.75v4.167H3.333Zm.834-7.5h3.75v-5h-3.75v5Zm7.916 6.666h3.75v-5h-3.75v5Zm0-9.166h3.75v-2.5h-3.75v2.5Zm-7.916 9.166h3.75v-2.5h-3.75v2.5Z"
        />
      </g>
    </svg>
  );
};

export default Dashboard;
