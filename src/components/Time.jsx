import { useEnergy } from "../lib/context/DataContext";

export default function Time() {
  const { apiData } = useEnergy();

  return (
    <div className="w-full flex items-center justify-center p-16 bg-platinum text-darkgreen font-medium rounded-lg shadow-sm">
      {apiData ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl">Tempo:</p>
          <h2 className="text-4xl">{apiData.minutes} min</h2>
        </div>
      ) : (
        <p className="text-3xl">Carregando dados...</p>
      )}
    </div>
  );
}
