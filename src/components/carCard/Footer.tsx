import Button from "../../elements/Button";
import { formatCurrency } from "../../utils/formatCurrency";

type FooterProps = {
  costPerDay: number;
};

const Footer: React.FC<FooterProps> = ({ costPerDay }) => {
  const money: string = formatCurrency(costPerDay, "af-ZA");

  return (
    <div className="w-full flex justify-between items-center">
      <h3>
        {money}/<span className="text-sm text-gray-400">day</span>
      </h3>
      <Button textContent="Rent Now" />
    </div>
  );
};

export default Footer;
