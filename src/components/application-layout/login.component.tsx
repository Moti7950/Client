import { useRef } from "react";
import {IfUserExsis} from "../../utility/functionFetch.utility.tsx"

export default function Login(
     props: {
  existingUser: Function;
}
) {
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
          if (!loginCheck) {
            props.existingUser(false)
          } else {
            props.existingUser(true)
          }
        }}
      >
        submit
      </button>
    </>
  );
}
