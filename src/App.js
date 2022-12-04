import './App.css';
// Davor im Terminal npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Random from './pages/Random';
import Uebersicht from './pages/Uebersicht';
import Details from './pages/Details';
import DetailsCard from './components/detailsCard/DetailsCard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/uebersicht' element={<Uebersicht />}> </Route>
          <Route path='/details/:id' element={<Details />}> </Route>
          <Route path='/detailsCard' element={<DetailsCard />}> </Route>
          <Route path='/random' element={<Random />}> </Route>
        </Routes>
      </Router>

    </div>
  );

};

export default App;
