import Login from "./login.component";
import SiginOut from "./sigin.component";

export default function HomePage(
    props: {
  existingUser: Function;
  statusNow: boolean;
}
){
    return(
        <>
        <div id="homePage-controler">
        <img id="homePage-logo" src="../../../public/LogoApp.jpeg" alt="Logo_App" />
        <h1>Welcome to home page</h1>
        <Login existingUser={props.existingUser} />
        {/* <SiginOut existingUser={props.existingUser}  /> */}
        </div>
        </>
    )
}