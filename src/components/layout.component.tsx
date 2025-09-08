// css style import
import type { PropsWithChildren } from "react";
import "../css/home.css.css";
import "../css/post.css.css";

import NavBar from "../components/application-layout/navBar.component";
import HomePage from "../components/application-layout/home.page.tsx";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar/>
      {children}{<HomePage/>}
      
    </>
  );
}
