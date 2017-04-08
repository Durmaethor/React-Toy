import React from 'react';


function App({ }) {
  return (
    <div>
      <Greet firstName='Ryan' lastName='Kramer' />
      <Greet firstName='Mikkel' lastName='Mentor' />
    </div>
  );
}

function Greet({ firstName, lastName}) {
  return <h1>Hello {firstName} {lastName}. How are you?</h1>
}

export default App;
