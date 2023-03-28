import { IconProps } from "@/common/types";

export const ArrowUpIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width || "18px"}
      height={height || "18px"}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color || "#000"}
        d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
      />
    </svg>
  );
};
