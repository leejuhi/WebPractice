import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./asset/font/GlobalStyle.tsx";
import HomePage from "./pages/HomePage.tsx";
import RecruitPage from "./pages/RecruitPage.tsx";
import QnaPage from "./pages/QnAPage.tsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/qna" element={<QnaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
