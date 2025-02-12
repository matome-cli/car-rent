import { useState } from "react";

const HeartSVG: React.FC = () => {
  const [isHearted, setIsHearted] = useState<boolean>(false);

  function handleClick(): void {
    setIsHearted(!isHearted);
  }

  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="cursor-pointer"
    >
      <path
        d="M7.41334 11.8736C7.18668 11.9536 6.81334 11.9536 6.58668 11.8736C4.65334 11.2136 0.333344 8.46023 0.333344 3.79356C0.333344 1.73356 1.99334 0.0668945 4.04001 0.0668945C5.25334 0.0668945 6.32668 0.653561 7.00001 1.56023C7.67334 0.653561 8.75334 0.0668945 9.96001 0.0668945C12.0067 0.0668945 13.6667 1.73356 13.6667 3.79356C13.6667 8.46023 9.34668 11.2136 7.41334 11.8736Z"
        fill={`${isHearted ? "#ED3F3F" : "#a9a9a9"}`}
      />
    </svg>
  );
};

export default HeartSVG;
