import { useNavigate } from "react-router";

export default function ErorrPage(){
    const navigate = useNavigate()
    return(
        <>
        <h1>Erorr input</h1>
        <button onClick={()=>{navigate("/showPosts")}}>home</button>
        </>
    )
}