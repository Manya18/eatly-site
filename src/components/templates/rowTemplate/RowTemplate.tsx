import { TextProps } from "../../../types/ChildrenProps";
import style from "./rowTemplate.module.css";

//паттерн компонент макета
const FlexTemplate = ({ children }: React.PropsWithChildren<TextProps>) => {
  return <div className={style.flexContainer}>{children}</div>;
};

export default FlexTemplate;
