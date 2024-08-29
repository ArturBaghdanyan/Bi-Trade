import './App.css';
import TradingText from './components/article';
import Header from './components/header';
import MainContainer from './components/main';

function App() {
  return (
   <div className="App">
    <div className='columns'>
      <Header />
      <TradingText />
    </div>
     <MainContainer />
   </div>
  );
}

export default App;
