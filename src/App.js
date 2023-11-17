import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Page/Cart";
import Home from "./Page/Home";

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}>
      </Route>
      <Route path="/product/:id" element={<Cart />} >
      </Route>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
