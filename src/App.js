import React from 'react';
import Greet from './Greet';


function App({  }) {

  const names=['Ryan', 'Thad', 'Gabe', 'Luis'];

  return (
    <div className='people'>

      {
        names.map((name, i) => {
          return (
            <Greet
            firstName = { name } 
            lastName = 'Whatever'
            fontSize = { (i +1) * 10 }
            >
            </Greet>
          );
        })
      }

      {/*<Greet firstName='Ryan' lastName='Kramer' fontSize='20' />
      <Greet firstName='Mikkel' lastName='Mentor' fontSize='50' />*/}
      
    </div>
  );
}



export default App;
