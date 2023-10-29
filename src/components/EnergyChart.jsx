import { useEnergy } from "../lib/context/DataContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function EnergyChart() {
  const { apiData } = useEnergy();

  const energy = apiData ? apiData.energy : 0;

  const data = [
    {
      name: "Energia",
      kWh: energy,
    },
  ];

  // const maxY = 152.2;
  const maxY = 5.07;
  const minY = 0;

    return (
    <div className="w-full min-w-min shadow-sm px-6 py-16 rounded-lg flex flex-col gap-6 items-center justify-center">
      <h1 className="text-2xl font-medium text-night">Consumo relativo</h1>
      {apiData ? (
        <div className="-ml-11">
          <BarChart width={280} height={300} data={data} barSize={50}>
            <XAxis dataKey="name" scale="point" />
            <YAxis domain={[minY, maxY]} tickLine={false} />
            <Tooltip />
            <CartesianGrid strokeDasharray={2} />
            <Bar dataKey="kWh" fill="#14e065" background={{ fill: "#E8EAE9" }} />
          </BarChart>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
      <div className="flex flex-col justify-center items-center text-xs text-slate-400">
        <p className="text-center">*Consumo médio de energia no Brasil por residência diariamente</p>
        <p>Fonte: Laboratório de eficiênica energética em edificações</p>
        <p>(labEEE - UFSC)</p>
      </div>
    </div>
  );
}
