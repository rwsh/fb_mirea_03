import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Not from "./components/Not";
import Calc from "./components/Calc";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


