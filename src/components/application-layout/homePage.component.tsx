import { useNavigate } from "react-router";

export function HomePage(){
    let navigate = useNavigate()
    return(
        <>
        <h1>Welcome to home page</h1>
        <button onClick={()=>{navigate("login")}}>login</button>
        <button onClick={()=>{navigate("sigin")}}>sigin</button>
        </>
    )
}