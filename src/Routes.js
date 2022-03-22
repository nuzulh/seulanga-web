import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/admin/Login';
import Registration from './pages/admin/Registration';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin/masuk' element={<Login />} />
        <Route path='/admin/daftar' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
