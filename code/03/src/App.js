import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Not from "./components/Not";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


