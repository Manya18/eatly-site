import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/heroPage/Hero';
import Features from './components/features/Features';
import DownloadApp from './components/downloadApp/DownloadApp';
import TopRecipesPage from './components/topRecipes/TopRecipesPage';
import PurchasesPage from './components/purchases/PurchasesPage';
import Feedback from './components/feedback/FeedbackPage';
import QuestionsPage from './components/questionsPage/QuestionsPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <DownloadApp />
      <TopRecipesPage />
      <PurchasesPage />
      <Feedback />
      <QuestionsPage />
      <Footer />
    </div>
  );
}

export default App;
