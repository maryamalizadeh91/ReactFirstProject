import React from 'react';
import './App.css';
import Header from './Header';
import Box from './Box';
import Footer from './Footer';

class App extends React.Component 
{
  render()
  {
    return (
      <div>
        <Header />
        <Box className="Box" box1="Box1" />
        <Box className="Box" box2="Box2" />
        <Box className="Box" box3="Box3" />
        <Footer />
      </div>
      
    );
  }
}

export default App;