import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Not from "./components/Not";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


