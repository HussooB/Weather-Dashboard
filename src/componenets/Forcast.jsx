const Forcast = ({title,data}) => {
  return (
    <div>
      <div className="flex justify-center items-start mt-6">
      <p className="font-medium text-white uppercase">{title}</p>
      </div>
      <hr className="my-1 text-white"/>
      <div className="flex justify-between text-white items-center ">
    {data.map((item,index) => (
      <div key={index} className="flex flex-col items-center justify-center">
        <p>{item.title}</p>
        <img src={item.icon} alt="weather-icon" className="w-12 my-1" />
        <p>
          {item.temp.toFixed()}°
        </p>
      </div>
    ))}
      </div>
    </div>
  )
}

export default Forcast