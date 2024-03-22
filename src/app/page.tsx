import React from 'react'
import Hero from '@/components/home/Hero';
import WeLove from '@/components/home/WeLove';
import Services from '@/components/home/Services';
import Appoitment from '@/components/home/Appoitment';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <WeLove />
      <Services />
      <Appoitment />
    </React.Fragment >
  )
}

export default App;