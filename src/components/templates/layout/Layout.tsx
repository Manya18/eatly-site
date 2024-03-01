import { TextProps } from "../../../types/ChildrenProps";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";

//паттерн компонент макета
const Layout = ({ children }: React.PropsWithChildren<TextProps>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
