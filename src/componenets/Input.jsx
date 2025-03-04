import { BiSearch,BiCurrentLocation } from "react-icons/bi"
import { useState } from "react"
const Input = ({setUnits,setQuery}) => {
  const [city,setCity] = useState('');
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const handleSearchClick = () => {
    if (city !=='') setQuery({q:city});
  
  }
  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      setQuery({lat:position.coords.latitude,lon:position.coords.longitude});
    })
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEnterPressed(true);
      handleSearchClick();
      setTimeout(() => setIsEnterPressed(false), 300); 
    }
  };   
  return (
    <div className="flex flex-row justify-center flex-wrap my-6">
      
      <div className="flex justify-center items-center mr-5 bg-white space-x-4 p-2 rounded-lg  w-[70%]">
        <input type="text" placeholder="type your city" value={city}  onChange={(e)=>{setCity(e.currentTarget.value)}} onKeyDown={handleKeyDown} className="bg-white text-xl p-2 w-full  capitalize 
        focus:outline-none placeholder:lowercase"/>
      <BiSearch size={30} onClick={()=>handleSearchClick()}  className={`cursor-pointer transition ease-out hover:scale-129 ${isEnterPressed ? 'scale-129' : ''}`}/>
      <BiCurrentLocation size={30} onClick={()=>handleLocationClick()} className="cursor-pointer transition ease-out hover:scale-129"/>
      </div>
      <div className="flex flex-row justify-center items-center rounded-lg  w-1/4">
      <button className="text-2xl transition cursor-pointer mr-1 ease-out text-white hover:scale-129" onClick={()=>setUnits("metric")}>°C</button>
      <p className="text-2xl text-white mx-1">|</p>
      <button className="text-2xl transition cursor-pointer ml-1 text-white ease-out hover:scale-129" onClick={()=>setUnits("imperial")}>°F</button>
      </div>
      </div>
  )
}

export default Input