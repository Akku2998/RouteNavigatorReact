import React from 'react';
import { userData } from '../AllData/UserData';
//import { useParams } from 'react-router-dom';  UserId
import { useNavigate } from 'react-router-dom';
export default function User() {
  // let parans=useParams();
  //console.log('pp',parans);
  let navigate = useNavigate();
  return (
    <>
      {/*<div>
        UserId:{parans.userId}
  </div>*/}
      <div className='py-20 px-4 flex flex-wrap'>
        {userData.map((abc)=>
            <div onClick={()=> navigate(`/users/${abc.Id}`)} className="box-border m-10 h-52 w-52 p-0  border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
            <h2 className="text-lg font-bold">Name: {abc.Name} <br />Age: {abc.Age} <br /> Id: {abc.Id}</h2>
          </div>
        )}
        {/*<div onClick={()=> navigate("/users/CC419")} className="box-border m-10 h-52 w-52 p-0  border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Rahul<br />Age: 27 <br /> Id: CC419</h2>
        </div>
        <div  className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Nidhi<br />Age: 25 <br /> Id: CC420</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Akku<br />Age: 26 <br /> Id: CC421</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Ankita<br />Age: 22 <br /> Id: CC422</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Lucky<br />Age: 24 <br /> Id: CC423</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Vicky<br />Age: 24 <br /> Id: CC424</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Harsh<br />Age: 20 <br /> Id: CC425</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Nitma<br />Age: 21 <br /> Id: CC426</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Aakriti<br />Age: 25 <br /> Id: CC427</h2>
        </div>
        <div className="box-border m-10 h-52 w-52 p-0 border-none md:box-content rounded-md bg-pink-100 flex justify-center items-center">
          <h2 className="text-lg font-bold">Name: Ayush<br />Age: 19 <br /> Id: CC428</h2>
        </div>*/}
      </div>

    </>
  )
}

