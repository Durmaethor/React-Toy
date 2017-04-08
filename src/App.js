import React from 'react';
import Greet from './Greet';


function App({}) {
  return (
    <div className='people'>
      <Greet firstName='Ryan' lastName='Kramer' />
      <Greet firstName='Mikkel' lastName='Mentor' />
    </div>
  );
}



export default App;
