// css style import
import "./App.css";
import "./css/home.css.css";
import "./css/post.css.css";
import "./css/navBar.css.css";
// tsx code import
// import page
import { BrowserRouter, Routes, Route } from "react-router";
import CreteANewPost from "./page/creteNewPost.tsx";
import Posts from "./components/application-layout/posts.tsx";
import Login from "./components/application-layout/login.component.tsx";
import Sigin from "./components/application-layout/sigin.component.tsx";
import Layout from "./components/layout.component.tsx";
import ShowOnePost from "./components/application-layout/onePost.component.tsx"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/showPosts" element={<Posts />} />
            <Route path="/creteANewPost" element={<CreteANewPost />} />
            <Route path="/ShowOnePost/1" element={<ShowOnePost/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/sigin" element={<Sigin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
