import React,{useState} from 'react'
import Dropdown from './components/dropdown/Dropdown';
import Hero from './components/hero/Hero';
import InfoSection from './components/infoSection/InfoSection';
import Navbar from './components/navbar/Navbar'; 
import { InfoData, InfoDataTwo } from './data/infoData';
import { SliderData } from './data/SliderData';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle=() =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData}/>
        <InfoSection {...InfoData}/>
        <InfoSection {...InfoDataTwo}/>
    </div>
  );
}

export default App;
