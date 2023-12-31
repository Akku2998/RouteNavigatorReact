import React from 'react';
import './App.css';
import UserDetails from './UserProfile/UserDetails';
import { Route,Routes } from  'react-router-dom';
import Home from './PublicRoutes/Home';
import About from './PublicRoutes/About';
import Incdec from './ReduxApp/Incdec';
import Errorr from './PublicRoutes/Errorr';
import Navbar from './PublicRoutes/Navbar';
import User from './UserInfo/User';
import UserId from './UserInfo/UserId';
import Author from './BlogPost/Author';
import AuthorDetails from './BlogPost/AuthorDetails';
function App() {
  const Name=(()=>
    <h1>This is Name Page!!!!</h1>);
    const Name2=(()=>
    <h1>This is Name Page2!!!!</h1>);
  return (
    <div>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route exact path="/contact/Name" Component={Name}/>
        <Route exact path="/contact/name2" Component={Name2}/>
        <Route  exact path="/users" Component={User} />
        <Route exact path="/users/:userId" Component={UserId} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Incdec} />
        <Route path="/" Component={Home}/>
        <Route Component={Errorr} />
        <Route exact path="/user" Component={UserDetails} />
        <Route path="/author" Component={Author}/>
        <Route exact path="/author/:authorId" Component={AuthorDetails} />
      </Routes> 
    </div>
    </div>
  
  )
}

export default App;
