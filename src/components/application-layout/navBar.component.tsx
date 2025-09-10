// reacts file import
import { useRef} from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

// import tsx
import { GetPostById } from "../../utility/functionFetch.utility.tsx";
export default function NavBar(props: { existingUser: Function }) {
  const navigate = useNavigate();
  const inputPostId = useRef<any>(null);
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
            <Link to="/showPosts">Posts</Link>
          </button>
          <button className="account-buten" onClick={()=>{
            props.existingUser(false)
            navigate("/")
          }} >sigin out
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
              const inputCheck = await GetPostById(inputPostId.current.value);
              if (!inputCheck) {
                navigate("/erorrPage");
              } else {
                navigate(`/ShowOnePost/${inputPostId.current.value}`);
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
