import { ReactNode } from "react";

type ButtonProps = {
  svg?: ReactNode;
  textContent?: string;
};

const Button: React.FC<ButtonProps> = ({ svg, textContent }) => {
  // icon button only
  if (!textContent) {
    return (
      <button className="bg-blue-500 active:bg-blue-700 hover:bg-blue-300 text-white w-button-sm h-button-sm">
        {svg}
      </button>
    );
  }

  // icon with text
  if (textContent && svg) {
    return (
      <button className="sm:w-button-sm w-button-md lg:w-button-lg sm:h-button-sm h-button-md lg:h-button-lg">
        {textContent}
        <span>{svg}</span>
      </button>
    );
  }

  // normal button
  return (
    <button className="w-button-md h-button-md sm:w-button-sm lg:w-button-lg bg ">
      {textContent}
    </button>
  );
};

export default Button;
