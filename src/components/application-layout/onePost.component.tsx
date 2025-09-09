import { useEffect, useRef, useState } from "react";

// tsx file import
import Post from "./post.component.tsx";
import { GetPostById } from "../../utility/functionFetch.utility.tsx";
import {useParams } from "react-router";



export default function ShowOnePost() {
  const { postId } = useParams();
  const [post, getPost] = useState<any>([]);
  useEffect(() => {
    (async () => {
      try {
        const postToShow = await GetPostById(postId ? postId :"0");
        getPost([postToShow]);
      } catch {
        console.log("from catch ShowOnePost");
      }
    })();
  }, [postId]);

  return (
    <>
      <div id="home-controler">
        <div id="posts-controler">
          <h1>hi from one post</h1>
          {post.map((currentItem: any) => {
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
