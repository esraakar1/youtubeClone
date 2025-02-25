import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Results from "./pages/results";
import Feed from "./pages/feed";
import Header from "./components/Header"; 
import React from "react";



const App = () => {
  return (
    <BrowserRouter>
    <Header/>


    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/watch" element={<Detail/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App