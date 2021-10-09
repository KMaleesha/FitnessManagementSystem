import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
import Header from './Components/Header/Header';
import cashOn from './Components/cashOn';

function App() {
  return (
    <div>
      <Header/>
      <CounterClass/>
      <CounterFunction/>
      <cashOn/>
    </div>
  );
}

export default App;
