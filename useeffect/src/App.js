import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [resourcetype, setResourcetype] = useState('posts');

  console.log('render')
  useEffect(() => {
    console.log('resource type changed');
  }, [resourcetype]);

  return (
    <>
      <button onClick={() => setResourcetype('posts')}>Posts</button>
      <button onClick={() => setResourcetype('comments')}>Comments</button>
      <button onClick={() => setResourcetype('likes')}>Likes</button>

      <h1>{resourcetype}</h1>
    </>
  );
}

export default App;
