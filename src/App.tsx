import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homePage/HomePage";
import ArticlePage from "./components/pages/postPage/PostPage";
import BlogPage from "./components/pages/blogPage/BlogPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
