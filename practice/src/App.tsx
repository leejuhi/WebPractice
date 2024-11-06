import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './asset/font/GlobalStyle.tsx';
import HomePage from './components/pages/HomePage.tsx';
import LoginPage from './components/pages/LoginPage.tsx';
import RecruitPage from './components/pages/RecruitPage.tsx';


function App() {
  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
