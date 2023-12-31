import React from 'react';
const Frontpage = () => {
  return (
    <div className="w-full h-screen bg-fff5ec">
     <nav className="flex items-center justify-between">
      <div className="flex items-center space-x-16">
        <img src="/logo.svg" alt="image" className="h-16" />
        <ul className="flex space-x-12">
          <li><a href="#" className="text-blue-900 text-sm">MenuOne</a></li>
          <li><a href="#" className="text-blue-900 text-sm">MenuTwo</a></li>
          <li><a href="#" className="text-blue-900 text-sm">MenuThree</a></li>
          <li><a href="#" className="text-blue-900 text-sm">MenuFour</a></li>
        </ul>
        </div>
        <div className="icon relative z-50 right-20 top-5 flex items-center">
  <a href="#" className="user bg-white text-black text-xl w-9 h-9 rounded-full flex items-center justify-center">
  <img src="./userpic.png" alt="User" className="w-full h-full rounded-full" />
  </a>
  <i className="far fa-angle-down text-red-500"></i>
  <a href="#" className="icon-text text-white ml-2">
    User
  </a>
</div>


      </nav>
      <div className="right-sidebar w-1/3 h-screen absolute right-0 top-0 bg-teal-600"></div>
      <div className="content flex justify-between">
        <div className="left w-1/2 ml-10 mt-20">
          <h2 className="text-8xl font-bold text-gray-300">Food</h2>
          <h3 className="text-5xl font-bold text-purple-900 leading-tight">Discover Restaurant<br/> & Delicious Food</h3>
          <form className="mt-8 flex">
      <input type="text" placeholder="Search Restaurant, Food" className="w-full py-3 px-4 bg-transparent border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
      <input type="submit" value="GO" className="bg-teal-600 text-white font-semibold py-3 px-6 ml-2 rounded-full cursor-pointer" />
    </form>
        </div>
        <img src="./dots-bg1.png" alt="Veg" className="veg w-1/4 h-120 absolute right-80 top-40 transform" />
      <img src="./1pngtreeÔÇölettuce.png" alt="veg" className="plate w-1/5 absolute right-80 top-10 transform" />
      <img src="./Pngtree-delicious-food.png" alt="plate" className="veg w-2/5 absolute right-40 top-40 transform rotate-12" />
      </div>
    </div>
  );
}

export default Frontpage;
