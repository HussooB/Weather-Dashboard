import React from 'react'

const TopPart = ({setQuery}) => {
 const cities = [{
  id: 1,
  name: 'Hawassa',
 },
 {
  id: 2,
  name: 'Addis Ababa',
 },
  {
  id:3,
  name: 'Adama',},
  {
  id:4,
  name: 'Dire Dawa',
},
{
  id:5,
  name: 'Jimma', 
}
   ]
 
  return (
    <div className='flex justify-around flex-wrap items-center my-6'>
     { cities.map(city => (
        <button className='cursor-pointer hover:bg-cyan-300 m-2 p-3 rounded' key={city.id} onClick={()=>setQuery({q:city.name})} >{city.name}</button>
      ))}
    </div>
  )
}

export default TopPart