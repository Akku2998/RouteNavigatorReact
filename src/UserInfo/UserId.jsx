import React, { useState,useEffect } from 'react'
import {userData} from '../AllData/UserData';
import { useParams,useNavigate } from "react-router-dom"
export default function UserId() {
  let params=useParams();
  let navigate=useNavigate();
  console.log('pp',userData);
    const[userObj,setUserObj]=useState({});
    useEffect(()=>{
      const user=userData.find((obj)=> obj.Id===params.userId)
      setUserObj(user);
    },[])
  return (
    <>
      <div>
    <h1 className="py-10 text-6xl font-extrabold text-pink-900 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
      User Details
    </h1>
    </div>
    <div className='px-28 py-2 flex space-x-11 justify-center flex-wrap'>
  <div className="box-border m 10 h-96 w-96  border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
  <h2 className="text-xl font-bold text-center">
    Name: {userObj.Name} <br />
    Age: {userObj.Age} <br />
    Id: {userObj.Id} <br/>
    Profession: {userObj.Profession}<br/>
    Weight: {userObj.Weight}<br/>
    Hobby: {userObj.Hobby}<br/>
    Address: {userObj.Address}
  </h2>
    
  </div>
  </div>
  <div>
  <button onClick={()=> navigate(-1)} className="bg-pink-200 hover:bg-pink-50 text-white font-bold py-2 px-4 rounded">
  Back
</button>
  </div>
    </>
  )
}
