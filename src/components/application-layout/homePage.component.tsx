import Login from "./login.component";
import Sigin from "./sigin.component";

export default function HomePage(
    props: {
  existingUser: Function;
  statusNow: boolean;
}
){
    return(
        <>
        <h1>Welcome to home page</h1>
        <Login existingUser={props.existingUser} />
        {/* <Sigin existingUser={props.existingUser}  /> */}
        </>
    )
}