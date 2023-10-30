import { useEnergy } from "../lib/context/DataContext";

import { BsFuelPumpDieselFill, BsFuelPumpFill } from "react-icons/bs";
import { FaSolarPanel } from "react-icons/fa6";
import { FcDam } from "react-icons/fc";
import { GiWindTurbine } from "react-icons/gi";
import { TbHandMove } from "react-icons/tb"

export default function EnergyTable() {
  const { apiData } = useEnergy();

  return (
    <div className="relative w-full min-w-max shadow-sm px-6 py-8 text-xl rounded-lg flex flex-col gap-8 items-center justify-center">
      <div className="absolute top-6 right-6 text-darkgreen">
        <TbHandMove />
      </div>
      <h1 className="text-2xl font-medium text-night">Recursos necessários</h1>
      {apiData ? (
        <div className="space-y-3 grid grid-cols-1 items-center w-full">

          <div className="group relative">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-xl">
                  <FcDam />
                </span>
                Hidrelétrica
              </p>
              <p>{apiData.relativeEnergy.water} L</p>
            </div>
            <span className="absolute top-7 scale-0 z-10 transition-all rounded bg-darkgreen p-2 text-xs text-center text-white group-hover:scale-100">
              Quantidade de água necessária para gerar {apiData.energy} kWh
            </span>
          </div>

          <div className="h-[1px] w-full bg-platinum" />

          <div className="group relative">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-xl text-cyan-950">
                  <FaSolarPanel />
                </span>
                Painel solar (1,6 m²)
              </p>
              <p>{apiData.relativeEnergy.solar} horas</p>
            </div>
            <span className="absolute top-7 scale-0 z-10 transition-all rounded bg-darkgreen p-2 text-xs text-center text-white group-hover:scale-100">
              Quantidade de tempo necessário para gerar {apiData.energy} kWh, em um painel solar de 300 W
            </span>
          </div>

          <div className="h-[1px] w-full bg-platinum" />

          <div className="group relative">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-xl text-sky-900">
                  <GiWindTurbine />
                </span>
                Turbina eólica (15 Km/h)
              </p>
              <p>{apiData.relativeEnergy.wind} minutos</p>
            </div>
            <span className="absolute top-7 scale-0 z-10 transition-all rounded bg-darkgreen p-2 text-xs text-center text-white group-hover:scale-100">
              Quantidade de tempo necessário para gerar {apiData.energy} kWh, em uma turbina eólica de 20 kW
            </span>
          </div>

          <div className="h-[1px] w-full bg-platinum" />

          <div className="group relative">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-xl text-red-900">
                  <BsFuelPumpFill />
                </span>
                Gasolina
              </p>
              <p>{apiData.relativeEnergy.gas} L</p>
            </div>
            <span className="absolute top-7 scale-0 z-10 transition-all rounded bg-darkgreen p-2 text-xs text-center text-white group-hover:scale-100">
              Quantidade de gasolina necessária para gerar {apiData.energy} kWh
            </span>
          </div>

          <div className="h-[1px] w-full bg-platinum" />

          <div className="group relative">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <span className="text-xl text-green-950">
                  <BsFuelPumpDieselFill />
                </span>
                Diesel
              </p>
              <p>{apiData.relativeEnergy.diesel} L</p>
            </div>
            <span className="absolute top-7 scale-0 z-10 transition-all rounded bg-darkgreen p-2 text-xs text-center text-white group-hover:scale-100">
              Quantidade de diesel necessário para gerar {apiData.energy} kWh
            </span>
          </div>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}
