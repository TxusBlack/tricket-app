import Dashboard from '../../components/templates/Dashboard';
import CardCheckIn from "../../components/molecules/cards/CardCheckIn";
import CardQR from "../../components/molecules/cards/CardQR";

const ScannerPage = () => {
  return (
    <Dashboard>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <CardCheckIn text="Check-in realizados" />
        </div>
        <div className="flex-1">
          <CardQR text="Empezar a escanear" />
        </div>
      </div>
    </Dashboard>
  );
};

export default ScannerPage;
