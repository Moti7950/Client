// css style import
import "../css/home.css.css";
import "../css/post.css.css";
import NavBar from "./application-layout/navBar.component";
import { Outlet } from "react-router";
import { useState } from "react";

export default function Layout() {
  const [curentPage, setNewPage] =useState<any>([])
  return (
    <>
      <div>
        <nav>
          <NavBar curentPage={curentPage} setNewPage={setNewPage}/>
        </nav>
        <main>
          <Outlet /> 
        </main>
        <footer> My Footer </footer>
      </div>
    </>
  );
}
