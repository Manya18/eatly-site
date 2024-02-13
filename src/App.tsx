import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HeroPage from './components/heroPage/HeroPage';
import Features from './components/features/Features';
import AppPreviewPage from './components/appPreviewPage/AppPreviewPage';
import RecipesPage from './components/recipesPage/RecipesPage';
import PurchasesPage from './components/purchasesPage/PurchasesPage';
import Feedback from './components/feedbackPage/FeedbackPage';
import QuestionsPage from './components/questionsPage/QuestionsPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <Features />
      <AppPreviewPage />
      <RecipesPage />
      <PurchasesPage />
      <Feedback />
      <QuestionsPage />
      <Footer />
    </div>
  );
}

export default App;
