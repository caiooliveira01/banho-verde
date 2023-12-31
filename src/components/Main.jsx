import { EnergyContextProvider } from "../lib/context/DataContext";
import EnergyChart from "./EnergyChart";
import EnergyConsumption from "./EnergyConsumption";
import EnergyTable from "./EnergyTable";
import Hints from "./Hints";
import WaterConsumption from './WaterConsumption';
import Time from './Time';

export default function Main() {
  return (
    <EnergyContextProvider>
      <Time />
      <EnergyConsumption />
      <WaterConsumption />
      <EnergyTable />
      <EnergyChart />
      <Hints />

      <footer className="col-span-full border-t text-night border-green-300 flex items-center justify-center pt-3">
        <p>&copy; Caio dos Santos de Oliveira - 2023</p>
      </footer>
    </EnergyContextProvider>
  );
}
