import CarCard from "./components/carCard/CarCard";

const App: React.FC = () => {
  return (
    <div className="w-10 p-5">
      <CarCard vehicleCode="CV-5" vehicleType="SUV" />
    </div>
  );
};

export default App;
