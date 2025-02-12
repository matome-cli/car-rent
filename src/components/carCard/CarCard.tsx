import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
// this needs to take props so that i can pass them down for other components

type CardCardProps = {
  vehicleCode: string;
  vehicleType: "SUV" | "Sedan" | "Hatchback";
  vehicleSVG: string;
};

const CarCard: React.FC<CardCardProps> = ({ vehicleCode, vehicleType }) => {
  return (
    <div className="w-60 h-48 rounded-lg flex flex-col justify-between items-start">
      <Header code={vehicleCode} type={vehicleType} />
      <Body
        seats={6}
        transmission="Manual"
        fuelTankCapacity={80}
        vehicleSVG="./cars/beigesuv.svg"
      />
      <Footer costPerDay={80}/>
    </div>
  );
};

export default CarCard;
