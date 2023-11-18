import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Page/Cart";
import Home from "./Page/Home";
import Header from './Component/Header';

function App() {


  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}>
      </Route>
      <Route path="/cart" element={<Cart />} >
      </Route>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
