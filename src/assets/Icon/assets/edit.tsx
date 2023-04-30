const Edit = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        fill="#4D5760"
        d="M1.417 12.833h.896l8.666-8.666-.437-.459-.459-.437-8.666 8.666v.896Zm-.834.834v-2.084L11.292.896a.757.757 0 0 1 .583-.25c.236 0 .438.083.604.25l.875.896c.167.166.25.364.25.594a.81.81 0 0 1-.25.593L2.667 13.667H.583Zm10.396-9.5-.437-.459-.459-.437.896.896Z"
      />
    </svg>
  );
};

export default Edit;
