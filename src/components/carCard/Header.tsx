import HeartSVG from "../../elements/HeartSVG";

type HeaderProps = {
  code: string;
  type: "SUV" | "Sedan" | "Hatchback";
};

const Header: React.FC<HeaderProps> = ({ code, type }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col justify-start items-start">
        <h2>{code}</h2>
        <p className="text-gray-400">{type}</p>
      </div>

      <HeartSVG />
    </div>
  );
};

export default Header;
