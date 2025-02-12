export type CarCard = {
    vehicleCode: string;
    vehicleType: "SUV" | "Sedan" | "Hatchback";
    vehicleSVG: string;
    fuelTankCapacity: number;
    transmission: "Manual" | "Automatic";
    seatNumber: number;
    costPerDay: number;
  };