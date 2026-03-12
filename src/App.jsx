import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import AboutHospital from './pages/AboutHospital';
import Contact from './pages/Contact';
import Department from './pages/Department';
import Doctor from './pages/Doctor';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutHospital' element={<AboutHospital />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Department' element={<Department/>} />
        <Route path='/Doctor' element={<Doctor />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;