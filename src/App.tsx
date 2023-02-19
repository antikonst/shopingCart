import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ShopingCartProvider } from "./context/ShopingCartContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {
  return (
    <ShopingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShopingCartProvider>
  );
}

export default App;
