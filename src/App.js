import React from "react";
import './App.css';
import ProfilePhoto from '../src/Component/Profile/ProfilePhoto';
import FullName from '../src/Component/Profile/FullName';
import Address from '../src/Component/Profile/Address';
import NavbarPage from '../src/Component/Profile/NavbarPage';


function App() {
  return (
    <div className="App">
     <NavbarPage />
     <h1 className='welcome'>Welcome To Your  Profile</h1>
     <div className='boddy'>
    <ProfilePhoto />
    <FullName />
    <Address />
    </div>
    </div>
  );
}

export default App;
