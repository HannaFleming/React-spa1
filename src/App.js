import { React }  from 'react';
import NavbarComponent from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './components/pages/Home';
import SpaMenu from './components/pages/SpaMenu';
import Products from './components/pages/Products';
import Membership from './components/pages/Membership';
 

function App() {
  return (

<div> 

      <NavbarComponent />
      <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/spaMenu" element={<SpaMenu/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/membership" element={<Membership/>}/>
  </Routes>

</div>

  );
}

export default App;
