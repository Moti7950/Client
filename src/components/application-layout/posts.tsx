// tsx file import
import Post from "./post.component.tsx";

// import utility function
import { GetAllPosts } from "../../utility/functionFetch.utility.tsx";
import { useEffect, useState } from "react";

// first page
export default function Posts() {
  const [posts, getPosts] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const listOfPos = await GetAllPosts();
        getPosts(listOfPos); 
      } catch{
        console.log("from catch");
      }
    })();
  }, []);

  return (
    <>
      {/* This code is for controlling the home page. */}
      <div id="home-controler">
        {/* This code is for controlling the posts. */}
        <div id="posts-controler">
          {/* In this code I run a loop on my DB (For now json) to publish the posts. */}
          {posts.map((currentItem: any) => {
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
