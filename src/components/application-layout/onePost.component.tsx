import { useEffect, useState } from "react";

// tsx file import
import Post from "./post.component.tsx";
import { GetPostById } from "../../utility/functionFetch.utility.tsx";

export default function ShowOnePost() {
  const [post, getPost] = useState<any>([{}]);
  useEffect(() => {
    (async () => {
      try {
        const postToShow = await GetPostById(postOhow)
        getPost(postToShow);
        console.log(post);
      } catch {
        console.log("from catch ShowOnePost");
      }
    })();
  }, []);

  return (
    <>
      <div id="home-controler">
        <div id="posts-controler">
          <h1>hi from one post</h1>
          {postOhow.map((currentItem: any) => {
            return (
              <Post
                key={currentItem.id}
                img={currentItem.img}
                explen={currentItem.explen}
                likes={currentItem.likes}
                ownerName={currentItem.ownerName}
                dataAndTime={currentItem.dataAndTime}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
