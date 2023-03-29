import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Time from '@/components/time'
import Greeting from '@/components/greeting';
import Phase from '@/components/phase';

function Home(){

  return (
    <div className="App">
      <div className="top"></div>
      <div className="middle">
        <Time/>
        <Greeting/>
      </div>
      <div className="bottom">
        <div className="phrase">
          "<Phase/>"
        </div>
      </div>
    </div>
  );
}

export default Home;