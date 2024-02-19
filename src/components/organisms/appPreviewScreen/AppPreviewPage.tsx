import React from "react";
import AppPreviewImg from "../../molecules/appPreviewImg/AppPreviewImg";
import AppPreviewInfo from "../../molecules/appPreviewInfo/AppPreviewInfo";
import FlexTemplate from "../../templates/rowTemplate/RowTemplate";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";

const AppPreviewPage = () => {
  return (
    <section>
      <FlexTemplate>
        <AppPreviewImg />
        <AppPreviewInfo />
      </FlexTemplate>
      <HrTypeStyled needMargin={true}/>
    </section>
  );
};

export default AppPreviewPage;
