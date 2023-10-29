/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { receiveTime } from "../../api/dataReceive";
import PowerSelect from "../../components/PowerSelect";

const EnergyContext = createContext();

export function useEnergy() {
  return useContext(EnergyContext);
}

export function EnergyContextProvider({ children }) {
  const [apiData, setApiData] = useState(null);
  // apiData, fica tipado como EnergyTypes ou null, no caso que os dados não foram carregados

  const [power, setPower] = useState("3000")

  const nPower = Number(power)

  useEffect(() => {
    async function fetchData() {
      const result = await receiveTime(nPower);
      console.log(result);
      if (result) {
        setApiData(result);
      }
    }

    fetchData(); // Chama a função pela primeira vez, na montagem do componente

    const intervalId = setInterval(() => {
      fetchData(); // Chama a função a cada 1 minuto
    }, 60000);

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado, evitando vazamentos de memória
    };
  }, [nPower]);

  return (
    <EnergyContext.Provider value={{ apiData }}>
      <main className="flex items-center justify-center flex-wrap p-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <PowerSelect power={power} setPower={setPower} />
          {children}
        </div>
      </main>
    </EnergyContext.Provider>
  );
}
