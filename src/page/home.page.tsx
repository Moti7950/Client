import Post from "../components/application-layout/post.component.tsx";
// import example post from lid folder
import { ExamplPost } from "../lib/examplePost.tsx";

export default function HomePage() {
  return (
    <>
      <div id="home-controler">
        <header id="header-controler">
        <img id="LogoApp" src="../../public/img/LogoApp.jpeg" alt="Logo_App" />
        <h1>Welcome to Linkodcode</h1>
        </header>
        <div id="posts-controler">
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
