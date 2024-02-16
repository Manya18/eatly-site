import { TextProps } from "../../../types/TextProps";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";

const Layout = ({children} : React.PropsWithChildren<TextProps>) => {
    return ( 
        <main>
            <Header />
            {children}
            <Footer />
        </main>
     );
}
 
export default Layout;