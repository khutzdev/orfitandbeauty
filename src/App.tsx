import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Booking from "./pages/Booking";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tienda" element={<Shop />} />
        <Route path="tienda/:productId" element={<ProductPage />} />
        <Route path="agendar" element={<Booking />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
