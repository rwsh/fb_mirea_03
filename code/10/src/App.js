import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Not from "./components/Not";
import Green from "./components/Green";
import Red from "./components/Red";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/green" element={<Green />} />
        <Route path="/red" element={<Red />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


