import Navbar from "./compoenents/Navbar";
import ProductsList from "./compoenents/ProductsList";
import Slider from "./compoenents/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import MoreInfo from "./compoenents/MoreInfo";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<> <Slider /> <ProductsList /> </>}></Route>
          <Route path="about" element={<><About /></>}></Route>
          <Route path="product/:productId" element={<MoreInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
