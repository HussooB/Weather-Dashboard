import { useEffect, useState } from 'react';
import TopPart from './componenets/TopPart';
import Input from './componenets/Input';
import TimeAndLocation from './componenets/TimeAndLocation';
import TempAndDetails from './componenets/TempAndDetails';
import Forcast from './componenets/Forcast';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const [query, setQuery] = useState({ q: 'hawassa' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({...query, units}).then(data => {
      setWeather(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl from-emerald-400 to-blue-400 shadow-gray-400 rounded-lg">
      <TopPart setQuery={setQuery}/>
      <Input setUnits={setUnits} setQuery={setQuery} />

      {weather ? (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forcast title="3 hour step forecast" data={weather.hourly} />
          <Forcast title="daily forecast " data={weather.daily}/>
        </>
      ):(<h1 className='text-3xl text-center text-red-700'>Please connect to the internet!</h1>)}
    </div>
  );
}

export default App;