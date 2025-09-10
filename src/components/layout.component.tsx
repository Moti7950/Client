// css style import
import "../css/home.css.css";
import "../css/post.css.css";
import NavBar from "./application-layout/navBar.component";
import { Outlet } from "react-router";

export default function Layout(props: {
  statusNow: boolean;
  existingUser: Function;
}) {
  return (
    <>
      {props.statusNow && (
        <div>
          <nav>
            <NavBar existingUser={props.existingUser} />
          </nav>
          <main>
            <Outlet />
          </main>
          <footer> My Footer </footer>
        </div>
      )}
    </>
  );
}
