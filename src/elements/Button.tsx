type ButtonProps = {
  svg?: string;
  textContent?: string;
};

const Button: React.FC<ButtonProps> = ({ svg, textContent }) => {
  // icon button only
  if (!textContent && svg) {
    return (
      <button className="w-10 h-10 px-3 ">
        <img src={svg} />
      </button>
    );
  }

  // icon with text
  if (textContent && svg) {
    return (
      <button className="w-button-lg h-button-md flex justify-center items-center gap-2">
        {textContent}
        <img src={svg} />
      </button>
    );
  }

  // normal button
  return (
    <button className="w-button-lg h-button-md text-center">
      {textContent}
    </button>
  );
};

export default Button;
