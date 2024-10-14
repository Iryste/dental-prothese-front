import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Accueil from './pages/Accueil';
import Prestations from './pages/Prestations';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Accueil />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/prestations" element={<Prestations />} />
    <Route path="*" element={<Accueil />} />
    </Route>
  </Routes>
  );
}

export default App;
