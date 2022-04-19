import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PagesNavigator from "./components/PagesNavigator/PagesNavigator";
import "./App.css";
import Productos from "./pages/Productos";
import Cart from "./pages/Cart";
import { Ayuda } from "./pages/Ayuda";
import { Footer } from "./components/Footer/Footer";
import { ArmaTuPc } from "./pages/ArmaTuPc";
import { MarcasSponsor } from "./pages/MarcasSponsor";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <PagesNavigator />
        <Routes>
          <Route path="/" element={<Productos></Productos>} />
          <Route path="/productos" element={<Productos></Productos>} />
          <Route path="/productos/:catId" element={<Productos></Productos>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/ayuda" element={<Ayuda></Ayuda>} />
          <Route path="/armatupc" element={<ArmaTuPc></ArmaTuPc>} />
          <Route path="/marcassponsor" element={<MarcasSponsor/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
