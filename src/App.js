import './App.css';
import Header from './Component/Header/Header';
import SHop from './Component/Shop/SHop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SHop className='container'></SHop>
    </div>
  );
}

export default App;
