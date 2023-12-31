import React from 'react'
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaReacteurope } from 'react-icons/fa';
function Navbar() { 
  return (
    <>
    <nav className="bg-blue-100 text-black">
    <ul className="px-20 py-4 flex items-center space-x-11">
      <li className='text-1xl font-bold font-serif'><FaReacteurope size={36}/></li>
          {/*<div className="bg-blue-500 rounded-full p-1">
    <h2 className="text-white text-1xl font-bold">N</h2>
  <h2 className="ml-2 text-1xl font-bold">ame</h2>
  </div><img className="h-8 w-8 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjp8k1dkQcFnFDqcXp6VgtGDLrL0t6Qc94Km6ALCIDw&usqp=CAU&ec=48665698" alt="Logo" />*/}
            
            <li className='text-1xl font-bold font-serif'><NavLink exact to='/'>Home</NavLink></li>
            <li className='text-1xl font-bold font-serif'><NavLink exact  to='/about'>About</NavLink></li>
            <li className='text-1xl font-bold font-serif'><NavLink exact  to='/contact'>Contact</NavLink></li>
            <li className='text-1xl font-bold font-serif'><NavLink exact  to='/user'>Users</NavLink></li>
            <li className='text-1xl font-bold font-serif'><NavLink exact  to='/users'>UsersDetail</NavLink></li>
            <li className="flex-grow"></li>
            <li className='-1xl font-bold font-serif'><NavLink exact to='/author'>Authors</NavLink></li>
            <li className='text-1xl font-bold font-serif'><NavLink exact  to='/about'>MostLikedPost</NavLink></li>
            <li className='text-1xl font-bold font-serif'><NavLink exact  to='/contact'>MostCommentPost</NavLink></li>
          
          </ul>
        </nav>
    {/*<NavLink activeClassName="active" to='/'>Home</NavLink>
    <NavLink activeClassName="active_cls" to='/about'>About</NavLink>
    <br/>

    <Link to='/'>Home</Link>
    <Link to='/about'>About Us</Link>
    <Link to='/contact'>Contact</Link>
    <br/>
    <a href='/'>Home</a>
    <a href='/about'>AboutUs</a>
  <a href="/contact">Contact</a>*/}
    </>
  )
}

export default Navbar;