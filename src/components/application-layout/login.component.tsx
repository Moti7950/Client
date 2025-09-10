import { useRef } from "react";
import { useNavigate } from "react-router";
import {IfUserExsis} from "../../utility/functionFetch.utility.tsx"

export default function Login(
     props: {
  existingUser: Function;
}
) {
    const navigate = useNavigate();
  const userName = useRef<HTMLInputElement>(null!);
  const password = useRef<HTMLInputElement>(null!);
  return (
    <>
      <h1>Hi from Login</h1>
      <input type="text" placeholder="enter userName" ref={userName}  />
      <input type="password" placeholder="enter password" ref={password} />
      <button
        className="account-buten"
        onClick={async () => {
          const loginCheck = await IfUserExsis(userName.current?.value ,password.current?.value);
          console.log(loginCheck);

          if (!loginCheck) {
            props.existingUser(false)
            // navigate("/erorrPage");
          } else {
            props.existingUser(true)
            // navigate("/showPosts");
          }
        }}
      >
        submit
      </button>
      {console.log(userName, password)}
    </>
  );
}
