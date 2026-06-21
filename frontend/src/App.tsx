import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

import Properties from './pages/Properties';
import Agents from './pages/Agents';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="properties" element={<Properties />} />
          <Route path="agents" element={<Agents />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
