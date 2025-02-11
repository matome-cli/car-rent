import { ReactNode } from "react";

type ButtonProps = {
  svg?: ReactNode;
  textContent?: string;
};

const Button: React.FC<ButtonProps> = ({ svg, textContent }) => {
  // icon button only
  if (!textContent) {
    return (
      <button className="w-button-sm h-button-sm p-2 flex justify-center items-center">
        {svg}
      </button>
    );
  }

  // icon with text
  if (textContent && svg) {
    return (
      <button className="w-button-md h-button-md flex justify-between items-center px-1">
        {textContent}
        {svg}
      </button>
    );
  }

  // normal button
  return (
    <button className="w-button-md h-button-md lg:w-button-lg lg:h-button-lg px-4 py-[5px]">
      {textContent}
    </button>
  );
};

export default Button;
