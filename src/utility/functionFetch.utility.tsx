export async function GetAllPosts() {
    const res = await fetch("http://127.0.0.1:9085/api/users/show/posts");
    if(!res.ok) throw new Error("Failed to fetch a posts");
    const json = await res.json();
    return json?? []; 
}

export async function GetPostById(postIdSherch: string)
{
    const res = await fetch(`http://127.0.0.1:9085/api/users/showOne/post/:${postIdSherch}`)
    if(!res.ok) throw new Error(`Failed to fetch a post ${postIdSherch}` )
    const json = await res.json();
    return json ?? [];
}