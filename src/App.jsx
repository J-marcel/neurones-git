import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Index';
import Setting from './component/Setting/Index';
import ErrorPage from './component/ErrorPage/Index';
import Etudiants from './component/Etudiants/Etudiants';
import Entreprises from './component/Entreprises/Entreprises';
import Stagiaires from './component/Stagiaires/Stagiaires';
import Administrateurs from './component/Administrateurs/Administrateurs';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etudiants" element={<Etudiants />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/stagiaires" element={<Stagiaires />} />
        <Route path="/administrateurs" element={<Administrateurs />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
