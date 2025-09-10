import { useNavigate } from "react-router";

export default function Sigin(props: { existingUser: Function }) {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hi from Sigin</h1>
      {props.existingUser(false) && navigate("//")}
    </>
  );
}
