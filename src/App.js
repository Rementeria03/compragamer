import { CartProvider } from './contexts/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PagesNavigator from './components/PagesNavigator/PagesNavigator';
import './App.css';
import Productos from './pages/Productos';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <PagesNavigator />
        <Routes>
          <Route path='/' element={<Productos></Productos>}/>
          <Route path='/productos' element={<Productos></Productos>}/>
          <Route path='/productos/:catId' element={<Productos></Productos>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
