import Header from "./Header";
// this needs to take props so that i can pass them down for other components

const CarCard: React.FC = () => {
  return (
    <div className="w-60 h-60 rounded-lg">
      <Header code="CR-V" type="SUV" />
    </div>
  );
};

export default CarCard;
