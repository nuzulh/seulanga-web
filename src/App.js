import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Top from './components/Top';

const App = () => {
  return (
    <div>
      <Header />
      <Top />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
