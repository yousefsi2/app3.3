import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import Admin from "./components/pages/admin";
import NotFound from "./components/pages/notFound";

function App() {
  return (
    <div className="App">
      <h1>Hello GitHub</h1>
      <a href="/home">Hello</a>
      <a href="/home">Hello</a>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      <h1>Footer</h1>
    </div>
  );
}

export default App;
