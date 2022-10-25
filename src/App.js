import Navbar from "./compoenents/Navbar";
import HomePage from "./compoenents/HomePage";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import MoreInfo from "./compoenents/MoreInfo";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<> <HomePage/> </>}></Route>
          <Route path="about" element={<><About /></>}></Route>
          <Route path="product/:productId" element={<MoreInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
