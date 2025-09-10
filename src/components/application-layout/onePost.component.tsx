import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

// tsx file import
import Post from "./post.component.tsx";
import { GetPostById } from "../../utility/functionFetch.utility.tsx";
import { useParams } from "react-router";

export default function ShowOnePost() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, getPost] = useState<any>([]);
  useEffect(() => {
    (async () => {
      try {
        const postToShow = await GetPostById(postId);
        console.log(typeof postToShow != typeof Object);
        if (!postToShow && typeof postToShow != typeof Object) {
          navigate("/erorrPage");
        } else {
          getPost([postToShow]);
        }
      } catch {}
    })();
  }, [postId]);

  return (
    <>
      <div id="home-controler">
        <div id="posts-controler">
          {post.map((currentItem: any) => {
            return (
              <Post
                key={currentItem.id}
                id={currentItem.id}
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
