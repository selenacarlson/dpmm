import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import About from './About';
import Profiles from './Profiles';
import Locations from './Locations';
import Contact from './Contact';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/profiles" element={<Profiles/>}/>
          <Route path="/locations" element={<Locations/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
