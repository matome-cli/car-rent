type BodyProps = {
  vehicleSVG: string;
  fuelTankCapacity: number;
  transmission: "Manual" | "Automatic";
  seats: number;
};

const Body: React.FC<BodyProps> = ({
  vehicleSVG,
  fuelTankCapacity,
  seats,
  transmission,
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <img src={vehicleSVG} />

      <div className="flex flex-col justify-center items-start gap-1">
        <div className="car-card-icon-p-group">
          <img src="./carCard/fueltank.svg" />
          <p className="text-gray-400">{fuelTankCapacity} L</p>
        </div>

        <div className="car-card-icon-p-group">
          <img src="./carCard/transmission.svg" />
          <p className="text-gray-400">{transmission}</p>
        </div>

        <div className="car-card-icon-p-group">
          <img src="./carCard/people.svg" />
          <p className="text-gray-400">{seats} people</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
