import HeroImage from "../../molecules/heroImage/HeroImage";
import HeroInfo from "../../molecules/heroInfo/HeroInfo";
import FlexTemplate from "../../templates/rowTemplate/RowTemplate";

const HeroScreen = () => {
  return (
    <FlexTemplate>
      <HeroInfo />
      <HeroImage />
    </FlexTemplate>
  );
};

export default HeroScreen;
