import {useNavigate} from "react-router";


async function NavToErorr() {
    const navigate = useNavigate();
    return(
        <>
        <div onClick={()=>{navigate("/erorrPage")}}></div>
        </>
    )

}

export async function GetAllPosts() {
  try {
    const res = await fetch("http://127.0.0.1:9085/api/users/show/posts");
    const json = await res.json();
    return json;
  } catch (e) {
    console.log("Failed to fetch a posts");
  }
}

// return only object
export async function GetPostById(postIdSherch: string) {
  try {
    const res = await fetch(
      `http://127.0.0.1:9085/api/users/showOne/post/:${postIdSherch}`
    );
    const json = await res.json();
    return json;
  } catch (e) {
    console.log("Failed to fetch a post");
    this._router.navigate
  }
}
