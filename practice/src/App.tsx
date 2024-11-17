import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./asset/font/GlobalStyle.tsx";
import HomePage from "./pages/HomePage.tsx";
import MguPage from "./pages/MguPage.tsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mgu" element={<MguPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
