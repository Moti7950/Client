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
export async function GetPostById(postIdSherch: string | undefined) {
  try {
    const res = await fetch(
      `http://127.0.0.1:9085/api/users/showOne/post/:${postIdSherch}`
    );
    const json = await res.json();
    return json;
  } catch (e) {
    console.log("Failed to fetch a post");
  }
}

export async function IfUserExsis(userName: string, password: string) {
  try {
    const res = await fetch("http://127.0.0.1:9085/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    if (res.ok) {
      return true;
    } else {
      return false;
    }
  } catch(e) {
    return false;
  }
}

