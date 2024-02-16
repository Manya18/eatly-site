import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/homePage/HomePage";
import LatestArticlesPage from "./components/pages/latestArticlesPage/LatestArticlesPage";
import PostsPage from "./components/pages/postsPage/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latestArticles" element={<LatestArticlesPage />} />
        <Route path="/blog" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
