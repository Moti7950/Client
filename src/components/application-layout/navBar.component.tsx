// reacts file import
import { useRef, useState } from "react";
import { Link } from "react-router";

// import tsx
import { GetPostById } from "../../utility/functionFetch.utility.tsx";

export default function NavBar() {
  const inputPostId = useRef<any>(null);
  const [curentPage, setPage] = useState<any>([]);
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
            <Link to="/showPost">home</Link>
          </button>
          <button className="account-buten">
            <Link to="/login">Login</Link>
          </button>
          <button className="account-buten">
            <Link to="/sigin">sign in</Link>
          </button>
          <button className="account-buten">
            <Link to="/creteANewPost">new post</Link>
          </button>
          <input
            type="text"
            placeholder="Please enter post id"
            ref={inputPostId}
          />
          <button
            className="account-buten"
            onClick={async () => {
              console.log(inputPostId.current.value);
              try {
                const newPost = await GetPostById(inputPostId.current.value);
                setPage(newPost);
              } catch {
                console.log("from catch GetPostById");
              }
            }}
          >
            sherch
          </button>
        </header>
      </nav>
    </>
  );
}
