// Import react file
import { useState } from "react"
// css style import
import "./App.css";
import "./css/home.css.css";
import "./css/post.css.css";
import "./css/navBar.css.css";
import "./css/homePage.css.css"
import "./css/layout.css.css"
// tsx code import
// import page
import {Routes, Route } from "react-router";
import CreteANewPost from "./components/application-layout/creteNewPost.tsx";
import Posts from "./components/application-layout/posts.tsx";
import Layout from "./components/layout.component.tsx";
import ShowOnePost from "./components/application-layout/onePost.component.tsx";
import ErorrPage from "./components/application-layout/erorr.component.tsx";
import HomePage from "./components/application-layout/homePage.component.tsx";

function App() {
  const [statusNow, existingUser] = useState<boolean>(false);
  return (
    <>
    {!statusNow && (<div>
      <HomePage statusNow={statusNow} existingUser={existingUser} />
    </div>)}
      <Routes>
        <Route path="/" element={<Layout statusNow={statusNow} existingUser={existingUser}/>}>
          <Route path="/showPosts" element={<Posts />} />
          <Route path="/creteANewPost" element={<CreteANewPost />} />
          <Route path="/ShowOnePost/:postId" element={<ShowOnePost />} />
          <Route path="/erorrPage" element={<ErorrPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
