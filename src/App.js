import React from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from './pages/SinglePostPage';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="posts" element={<PostsPage />} />
          <Route exact path=":id" element={<SinglePostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>  
  )
}

export default App