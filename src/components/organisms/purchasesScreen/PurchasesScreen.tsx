import React from "react";
import PurchasesInfo from "../purchasesInfo/PurchasesInfo";
import PurchasesDashboard from "../purchasesDashboard/PurchasesDashboard";
import FlexTemplate from "../../templates/rowTemplate/RowTemplate";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";

const PurchasesPage = () => {
  return (
    <section>
      <FlexTemplate>
        <PurchasesInfo />
        <PurchasesDashboard />
      </FlexTemplate>
      <HrTypeStyled needMargin={true} />
    </section>
  );
};

export default PurchasesPage;
