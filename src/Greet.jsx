import React from 'react';

export default function Greet({ firstName, lastName}) {
  return <h1>Hello {firstName} {lastName}. How are you?</h1>;
}