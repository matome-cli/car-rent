import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

type CarCardProps = {
  vehicleCode: string;
  vehicleType: "SUV" | "Sedan" | "Hatchback";
  vehicleSVG: string;
  fuelTankCapacity: number;
  transmission: "Manual" | "Automatic";
  seatNumber: number;
  costPerDay: number;
};

const CarCard: React.FC<CarCardProps> = ({
  vehicleCode,
  vehicleType,
  vehicleSVG,
  fuelTankCapacity,
  transmission,
  seatNumber,
  costPerDay,
}) => {
  return (
    <div className="w-60 h-48 lg:w-60 lg:h-60 rounded-lg flex flex-col justify-between items-start">
      <Header code={vehicleCode} type={vehicleType} />
      <Body
        seats={seatNumber}
        transmission={transmission}
        fuelTankCapacity={fuelTankCapacity}
        vehicleSVG={vehicleSVG}
      />
      <Footer costPerDay={costPerDay} />
    </div>
  );
};

export default CarCard;
