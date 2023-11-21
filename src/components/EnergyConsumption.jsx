import { useEnergy } from "../lib/context/DataContext";

export default function EnergyConsumption() {
  const { apiData } = useEnergy();

  return (
    <div className="w-full flex items-center justify-center p-16 bg-mindaro text-darkgreen font-medium rounded-lg shadow-sm">
      {apiData ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-3xl">Energia consumida:</p>
          <h2 className="text-4xl">{apiData.energy} kWh</h2>
        </div>
      ) : (
        <p className="text-3xl">Carregando dados...</p>
      )}
    </div>
  );
}
