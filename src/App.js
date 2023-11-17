import ProductList from "./ProductLists";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" exact element={<ProductList/>}>
      </Route>
      <Route path="/product/:id" element={<Cart />} >
      </Route>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
