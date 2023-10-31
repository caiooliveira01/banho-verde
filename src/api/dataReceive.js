import axios from "axios";

const channel = 2302442;

async function receiveTime(power) {
  try {
    const response = await axios.get(
      `https://api.thingspeak.com/channels/${channel}/feeds.json?results=2`
    );
    const data = response.data;

    // Recebe os dados e passa ao time, o tempo do quadro
    const time = data.feeds[1].field1;

    // Cálculos
    // const energyUse = (power * time) / 1000;
    const energyUse = (power * time) / 1000;
    const waterUse = energyUse * 3600;
    const gasUse = energyUse * 0.11;
    const dieselUse = energyUse * 0.26;
    const solarPanels = energyUse / 0.3;
    const windTurbine = (energyUse / (20 * 0.2 * 4.2)) * 60;
    const timeMin = time * 60;
    const waterShower = timeMin * 15;


    // Guarda os dados
    const energyConsumption = {
      time,
      energy: energyUse.toFixed(2),
      minutes: timeMin.toFixed(2),

      relativeEnergy: {
        water: waterUse.toFixed(2),
        gas: gasUse.toFixed(2),
        diesel: dieselUse.toFixed(2),
        solar: Math.ceil(solarPanels),
        wind: Math.ceil(windTurbine),
        waterCons: Math.ceil(waterShower),
      },
    };

    return energyConsumption;
  } catch (error) {
    console.error(`Erro ao receber dados: ${error}`);
    return null;
  }
}

export { receiveTime };
