import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Login from './pages/admin/Login';
import Registration from './pages/admin/Registration';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/events' element={<Events />} />
        </Route>
        <Route path='/admin/masuk' element={<Login />} />
        <Route path='/admin/daftar' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
