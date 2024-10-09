import { Routes, Route } from 'react-router-dom';
import Home from './components_desktop/home';
import AboutUs from './components_desktop/aboutus';
import OurTeam from './components_desktop/ourteam';
import Catalogue from './components_desktop/catalogue';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </div>
    </>
  );
};

export default App
