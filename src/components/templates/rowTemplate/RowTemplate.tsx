import { TextProps } from "../../../types/TextProps";
import style from "./rowTemplate.module.css"

const FlexTemplate = ({children} : React.PropsWithChildren<TextProps>) => {
    return ( 
        <div className={style.flexContainer}>
            {children}
        </div>
     );
}
 
export default FlexTemplate;