import * as React from "react";

const SvgComponent = ({ color, ...props }) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.49 9.584 5.6 16.754c-.7.42-1.6-.08-1.6-.9v-8c0-3.49 3.77-5.67 6.8-3.93l4.59 2.64 2.09 1.2c.69.41.7 1.41.01 1.82ZM18.081 15.457l-4.05 2.34-4.04 2.33c-1.45.83-3.09.66-4.28-.18-.58-.4-.51-1.29.1-1.65l12.71-7.62c.6-.36 1.39-.02 1.5.67.25 1.55-.39 3.22-1.94 4.11Z"
      fill={color}
    />
    <path
      d="M17.6 7.865c-.832-.642-2.258-1.271-2.258-1.271-3.758 2.942-11.31 8.953-11.31 9.457 0 2.02.23 2.43 1.544 3.743.558.558.927.546 1.105.558l12.784-6.332c.325-.492.948-1.702.51-2.947-.437-1.245-1.544-2.566-2.376-3.208Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;