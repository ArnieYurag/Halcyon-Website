import './App.css';
import Header from './components/Header';
import LandingPage from './pages/Landingpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="scrollable-content">
      <Header />
      <LandingPage />
      <Footer />
      </div>
    </div>
  );
}

export default App;
