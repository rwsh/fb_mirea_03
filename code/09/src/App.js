import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Not from "./components/Not";
import New from "./components/New";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New/>} />
        <Route path="/old" element={<Navigate to="/new" />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


