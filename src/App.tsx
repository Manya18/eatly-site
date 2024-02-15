import React from 'react';
import './App.css';
import Header from './components/organisms/header/Header';
import Features from './components/organisms/features/Features';
import AppPreviewPage from './components/organisms/appPreviewScreen/AppPreviewPage';
import RecipesPage from './components/organisms/recipesScreen/RecipesScreen';
import PurchasesPage from './components/organisms/purchasesScreen/PurchasesScreen';
import Feedback from './components/organisms/feedbackScreen/FeedbackScreen';
import QuestionsPage from './components/organisms/FAQScreen/FAQScreen';
import Footer from './components/organisms/footer/Footer';
import HeroScreen from './components/organisms/heroScreen/HeroScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroScreen />
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
