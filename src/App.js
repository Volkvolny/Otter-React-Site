import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faOtter, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import WhatAreOtters from './components/pages/whatareotters';
import FunFacts from './components/pages/funfacts';
import Otterpedia from './components/pages/otterpedia';

library.add(faOtter, faTimes, faBars);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element= {<Home />}/>
        <Route path='/whatareotters' exact element= {<WhatAreOtters />}/>
        <Route path='/funfacts' exact element= {<FunFacts />}/>
        <Route path='/otterpedia' exact element= {<Otterpedia />}/>
      </Routes>
      
    </>
  );
}

export default App;
