// reacts file import
import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav>
        <header id="header-controler">
          <img
            id="LogoApp"
            src="http://localhost:9085/LogoApp.jpeg"
            alt="Logo_App"
          />
          <h1>Welcome to Linkodcode</h1>
          <button className="account-buten">
            <Link to="/home">home</Link>
          </button>
          <button className="account-buten">
            <Link to="/home">Login</Link>
          </button>
          <button className="account-buten">
            <Link to="/home">sign in</Link>
          </button>
          <button className="account-buten">
            <Link to="/CreteANewPost">new post</Link>
          </button>
          <input type="text" placeholder="Please enter post id"/>
          <button className="account-buten" onClick={()=>{
          }}>sherch</button>
        </header>
      </nav>
    </>
  );
}
