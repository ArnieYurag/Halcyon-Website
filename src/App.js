import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/Landingpage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="App">
        <div className="scrollable-content">
          <Header />
          <Routes> {/* Define Routes inside Router */}
            <Route path="/" element={<LandingPage />} /> {/* Route for landing page */}
            <Route path="/shop" element={<ShopPage />} /> {/* Route for shop page */}
            <Route path="/contact" element={<ContactPage />} /> {/* Route for contact page */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
