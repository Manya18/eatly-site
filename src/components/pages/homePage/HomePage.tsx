import QuestionsPage from "../../organisms/FAQScreen/FAQScreen";
import AppPreviewPage from "../../organisms/appPreviewScreen/AppPreviewPage";
import Features from "../../organisms/features/Features";
import HeroScreen from "../../organisms/heroScreen/HeroScreen";
import PurchasesPage from "../../organisms/purchasesScreen/PurchasesScreen";
import RecipesPage from "../../organisms/recipesScreen/RecipesScreen";
import FeedbackScreen from "../../organisms/feedbackScreen/FeedbackScreen";
import Layout from "../../templates/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <HeroScreen />
      <Features />
      <AppPreviewPage />
      <RecipesPage />
      <PurchasesPage />
      <FeedbackScreen />
      <QuestionsPage />
    </Layout>
  );
};

export default HomePage;
