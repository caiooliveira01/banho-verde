import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "20d359cf9d0c7b31508a5b7a68f881e9";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        });
      }
    }

    getLocation(); // Chame a função getLocation aqui para obter a localização quando o componente for montado.

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&lang=pt_br&units=metric`
        );

        setWeatherData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location.lat, location.lon]);

  return (
    <div className="hidden md:flex items-center justify-between gap-2 font-medium text-lg">
      {weatherData ? (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Icon"
            // className="hidden"
          />
          <p>{Math.round(weatherData.main.temp)}°C</p>
        </>
      ) : (
        <p className="text-sm font-normal text-platinum">Acesso negado à localização</p>
      )}
    </div>
  );
}
