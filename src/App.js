import React from 'react';
import Greet from './Greet';


function App({}) {
  return (
    <div className='people'>
      <Greet firstName='Ryan' lastName='Kramer' fontSize='20' />
      <Greet firstName='Mikkel' lastName='Mentor' fontSize='50' />
    </div>
  );
}



export default App;
