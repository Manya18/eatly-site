import QuestionsPage from "../../organisms/FAQScreen/FAQScreen";
import Features from "../../organisms/features/Features";
import RecipesPage from "../../organisms/recipesScreen/RecipesScreen";
import FeedbackScreen from "../../organisms/feedbackScreen/FeedbackScreen";
import Layout from "../../templates/layout/Layout";
import HeroImage from "../../molecules/heroImage/HeroImage";
import HeroInfo from "../../molecules/heroInfo/HeroInfo";
import FlexTemplate from "../../templates/rowTemplate/RowTemplate";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";
import AppPreviewImg from "../../molecules/appPreviewImg/AppPreviewImg";
import AppPreviewInfo from "../../molecules/appPreviewInfo/AppPreviewInfo";
import PurchasesDashboard from "../../organisms/purchasesDashboard/PurchasesDashboard";
import PurchasesInfo from "../../organisms/purchasesInfo/PurchasesInfo";

const HomePage = () => {
  return (
    <Layout>
      <FlexTemplate>
        <HeroInfo />
        <HeroImage />
      </FlexTemplate>

      <Features />

      <FlexTemplate>
        <AppPreviewImg />
        <AppPreviewInfo />
      </FlexTemplate>
      <HrTypeStyled needMargin={true} />

      <RecipesPage />
      
      <FlexTemplate>
        <PurchasesInfo />
        <PurchasesDashboard />
      </FlexTemplate>
      <HrTypeStyled needMargin={true} />
      
      <FeedbackScreen />
      <QuestionsPage />
    </Layout>
  );
};

export default HomePage;
