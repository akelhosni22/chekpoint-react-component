import './App.css'
import React, { Component } from 'react';
import {ProfilePhoto} from './component/profile/ProfilePhoto.js';
import {FullName} from './component/profile/FullName.js';
import { Address } from './component/profile/Adress';


class App extends Component{ 
  render() {
    return (
      <div className="App">
      
        <ProfilePhoto />
        <FullName />
        <Address />
        <footer>All Rights Reserved (C) Tunisia 2021 </footer> 
      </div>
  );
}
}

export default App ;