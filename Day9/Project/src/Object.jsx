import React, { useState } from 'react';

const Object = () => {
  const [data, setData] = useState({
    Name: 'Saharsh',
    address: {
      city: 'Delhi',
      country: 'India',
    },
  });

  const handleName = (name) => {
    setData((data) => ({
        ...data,Name:name
    }));
  };
  const handleCity =(city)=>{
    setData((data)=>({
        ...data,
        address:{
            ...data.address,
            city:city
        }
    }))
  }
  const handleCountry = (country)=>{
    setData((data)=>({
        ...data,
        address:{
            ...data.address,
            country:country
        }
    }))
  }

  return (
    <div>
      <h3>Updating Object in a State</h3>

      <input type="text" placeholder="Enter Name" onChange={(e) => handleName(e.target.value)}/>
      <input type="text" placeholder='Enter city' onChange={(e)=> handleCity(e.target.value)}/>
      <input type="text" placeholder='Enter country name' onChange={(e)=> handleCountry(e.target.value)}/>
      <h2>Name : {data.Name}</h2>
      <h2>City : {data.address.city}</h2>
      <h2>Country : {data.address.country}</h2>
    </div>
  );
};

export default Object;