import './App.css';
import Footer from './components/footer';
import MainContainer from './components/main';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import Home from "./components/home";
import { ResetPassword } from './components/reset';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/main" element={<MainContainer />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <ResetPassword />
    </div>
    </>
  );
}

export default App;
