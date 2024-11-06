import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './asset/font/GlobalStyle.tsx';
import HomePage from './components/pages/HomePage.tsx';
import LoginPage from './components/pages/LoginPage.tsx';
import RecruitPage from './components/pages/RecruitPage.tsx';
import QnaPage from './components/pages/QnAPage.tsx';
import ActivityPage from './components/pages/ActivityPage.tsx';


function App() {
  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
            <Route path="/qna" element={<QnaPage />} />
            <Route path="/activity" element={<ActivityPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
