import { IconProps } from "@/common/types";

export const HamburgerMenuIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width || "30px"}
      height={height || "30px"}
    >
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Menu">
            <rect id="Rectangle" fillRule="nonzero" x="0" y="0"></rect>
            <line
              x1="5"
              y1="7"
              x2="19"
              y2="7"
              id="Path"
              stroke={color || "#000"}
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
            <line
              x1="5"
              y1="17"
              x2="19"
              y2="17"
              id="Path"
              stroke={color || "#000"}
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              id="Path"
              stroke={color || "#000"}
              strokeWidth="2"
              strokeLinecap="round"
            ></line>
          </g>
        </g>
      </g>
    </svg>
  );
};
