const TimeAndLocation = ({weather:{formattedLocalTime,name, country}}) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center items-center my-6">
      <p className="text-xl text-white">
      {formattedLocalTime}
      </p>
      </div>
      <div className="flex flex-row justify-center items-center my-3">
        <p className="text-3xl text-white ">{`${name}, ${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation