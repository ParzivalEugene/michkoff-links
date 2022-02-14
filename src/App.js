import React from "react";
import './App.scss';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
