import Header from './components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import CartPage from './components/Cart';
function App() {
  return (
      <BrowserRouter>
      <Header />
      <div className='App'>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<CartPage/>} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
