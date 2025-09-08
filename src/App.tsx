// css style import
import "./App.css";
import "./css/home.css.css";
import "./css/post.css.css";
import "./css/navBar.css.css"
// tsx code import
// import page
import {Routes, Route } from "react-router";
import CreteANewPost from "./page/creteNewPost.tsx";

function App() {
  return (
    <>
       <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/CreteANewPost" element={<CreteANewPost />} />
      </Routes>
    </>
  );
}

export default App;
