import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/Landingpage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="scrollable-content">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
