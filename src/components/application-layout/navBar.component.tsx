// reacts file import
import { useRef, useState } from "react";
import { Link, Navigate } from "react-router";
import { useNavigate } from "react-router";

// import tsx
import { GetPostById } from "../../utility/functionFetch.utility.tsx";
import ShowOnePost from "../../components/application-layout/onePost.component.tsx"

export default function NavBar(props:{
  curentPage: any;
  setNewPage: Function;
}) {
  let navigate = useNavigate()

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
            <Link to="/showPosts">Posts</Link>
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
                const newPost = await GetPostById(inputPostId.current.value);
                const x = inputPostId.current.value
                navigate(`/ShowOnePost/:${x}`)
                if (newPost) {
                  props.setNewPage(newPost);
                  setPage(newPost)
                  console.log(curentPage);                  
                } else {
                  console.log("Post not found");
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
