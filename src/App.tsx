import CarCard from "./components/carCard/CarCard";

const App: React.FC = () => {
  return (
    <div className="w-dvw h-full px-5">
      <CarCard vehicleCode="CV-5" vehicleType="SUV" vehicleSVG="./cars/beigesuv.svg" fuelTankCapacity={70} costPerDay={90} seatNumber={6} transmission="Manual" />
    </div>
  );
};

export default App;
