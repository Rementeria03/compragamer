import { CartProvider } from './contexts/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PagesNavigator from './components/PagesNavigator/PagesNavigator';
import './App.css';
import ProdContainer from './components/ProdContainer/ProdContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <PagesNavigator />
        <Routes>
          <Route path='/' element={<ProdContainer></ProdContainer>}/>
          <Route path='/productos' element={<ProdContainer></ProdContainer>}/>
          <Route path='/productos/:catId' element={<ProdContainer></ProdContainer>}/>
          <Route path='/productos/:catId/:subCategory' element={<ProdContainer></ProdContainer>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
