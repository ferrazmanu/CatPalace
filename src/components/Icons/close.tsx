import { IconProps } from "./iconTypes";

export const CloseIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width || "24px"}
      height={height || "24px"}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Close</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Close">
          <rect
            id="Rectangle"
            fill-rule="nonzero"
            x="0"
            y="0"
            width="24"
            height="24"
          ></rect>
          <line
            x1="16.9999"
            y1="7"
            x2="7.00001"
            y2="16.9999"
            id="Path"
            stroke={color || "#936287"}
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
          <line
            x1="7.00006"
            y1="7"
            x2="17"
            y2="16.9999"
            id="Path"
            stroke={color || "#936287"}
            strokeWidth="2"
            strokeLinecap="round"
          ></line>
        </g>
      </g>
    </svg>
  );
};
