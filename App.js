import './App.css';
import TradingText from './components/article';
import Footer from './components/footer';
import Header from './components/header';
import MainContainer from './components/main';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/about';

function App() {
  return (
    <div className="App">
      <div className="columns">
        <Header />
        <TradingText />
      </div>
      <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
