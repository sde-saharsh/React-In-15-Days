import React, { useState } from 'react';
import './App.css';
import SideBar from './SideBar';

const App = () => {
  const [side, setSide] = useState(false);

  return (
    <div className='root'>
      <div className='home'>Home</div>
      <button className='toggle-btn' onClick={() => setSide(!side)}>|||</button>

      {side ? <SideBar /> : null}
    </div>
  );
}

export default App;
