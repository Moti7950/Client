// css style import
import "./App.css";
import "./css/home.css.css";
import "./css/post.css.css";
import "./css/navBar.css.css";
// tsx code import
// import page
import { BrowserRouter, Routes, Route } from "react-router";
import CreteANewPost from "./page/creteNewPost.tsx";
import HomePage from "./components/application-layout/home.page.tsx";
import NavBar from "./components/application-layout/navBar.component.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/showPost" element={<HomePage />} />
          <Route path="/CreteANewPost" element={<CreteANewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
