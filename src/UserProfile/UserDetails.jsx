
import { Button } from "@material-tailwind/react";
import {  useState } from "react";
import allData from "../AllData/allData";

function Exercise1() {
const[userObject,setUserObject]=useState('null');
//const[data,setData]=useState();
 console.log(userObject);
  let setDataFunc = (Id) => {
    const obj=allData.find((obj)=> obj.Id===Id )
    setUserObject(obj);
  }

  return (
    <div>
      <div class="bg-fixed" style={{ backgroundImage: "url('https://web-dev.imgix.net/image/admin/ltK4SNRultTnkbimOySm.jpg?auto=format')", height: "750px" }}>
        <nav className=' bg-blue-100 text-Black '>
          <ul className='px-28 py-4 flex space-x-11 justify-center'>
            <li className='text-4xl font-bold font-serif'>WEB PAGES</li>
          </ul>
        </nav>
        <div className='px-28 py-4 flex space-x-11 justify-center'>
          <div className="box-border m-20 h-72 w-72 p-4 border-none md:box-content rounded-md" style={{backgroundColor : userObject.color || "white"}}>
          <div className='px-4 py-4 flex space-x-11 justify-center'>
            <div className="m-2 px-12 py-18 h-40 w-40 flex items-center justify-center rounded-full shadow-xl bg-white">
            {userObject.imgsrc && <img src = {userObject.imgsrc} alt="mypic" style={{ borderRadius: '50%', height: '180px',width: 'auto', maxWidth: '360px' }}/>}
              </div>
            </div>
            <div>
            {userObject.Name}
            </div>
            <div>
            {userObject.Id}
            </div>
          </div>
        </div>
        <div className='px-28 py-4 flex space-x-11 justify-center'>
          <div className="flex w-max h-12 gap-4">
            {/*<Button color="blue" onClick={rFunc}>Rahul</Button>
            <Button color="red" onClick={nFunc}>Nidhi</Button>
            <Button color="green" onClick={lFunc}>Lucky</Button>
        <Button color="amber" onClick={vFunc}>Vicky</Button>*/}

            
          { allData.map(obj => (
            <Button color={obj.color}  key={obj.id}  onClick={() => setDataFunc(obj.Id)}>{obj.Name}</Button>
            
         )  ) }
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Exercise1;