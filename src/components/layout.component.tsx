// css style import
import type { PropsWithChildren } from "react";
import "../css/home.css.css";
import "../css/post.css.css";

export default function Layout({children}: PropsWithChildren) {
  return (
    <>
      {children}
    </>
  );
}
