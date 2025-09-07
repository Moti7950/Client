import Post from "../components/application-layout/post.component.tsx";
// import example post from lid folder
import { ExamplPost } from "../lib/examplePost.tsx";

// first page
export default function HomePage() {
  return (
    <>
    {/* This code is for controlling the home page. */}
      <div id="home-controler">
        <header id="header-controler">
        <img id="LogoApp" src="../../public/img/LogoApp.jpeg" alt="Logo_App" />
        <h1>Welcome to Linkodcode</h1>
        <button className="account-buten">Login</button>
        <button className="account-buten">sign in</button>
        </header>
        {/* This code is for controlling the posts. */}
        <div id="posts-controler">
            {/* In this code I run a loop on my DB (For now json) to publish the posts. */}
        {ExamplPost.map((currentItem : any) => {
          return(
          <Post
            key={currentItem.id}
            img={currentItem.img}
            explen={currentItem.explen}
            likes={currentItem.likes}
            ownerName={currentItem.ownerName}
            dataAndTime={currentItem.dataAndTime}
          />);
        })}
        </div>
      </div>
    </>
  );
}
