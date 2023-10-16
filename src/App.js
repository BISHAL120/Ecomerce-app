import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import MyState from './context/data/MyState';
import Home from './Component/Home/Home';
import Product from './Product/Product';
import TshartPage from './Component/Tshart Page/TshartPage';

function App() {
  return (
    <MyState>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tshart' element={<TshartPage />} />
          <Route path='/tshart/product/:id' element={<Product />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </MyState>
  );
}

export default App;
