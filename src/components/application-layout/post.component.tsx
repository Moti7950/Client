import { useNavigate } from "react-router";

export default function Post(props: {
  id: string;
  img: string;
  explen: string;
  likes: string;
  ownerName: string;
  dataAndTime: string;
}) {
  const navigate = useNavigate();
  const filterIdByClick = (e: any) => {
          navigate(`/ShowOnePost/${e.target.parentNode.className}`);
        }
  return (
    <>
      {/* a templit for posts */}
      <div id="post-controler"className={props.id}>
        <img id="img-post" src={props.img} alt="img_post" onClick={filterIdByClick} />
        <h3 id="explen-post" onClick={filterIdByClick}>{props.explen}</h3>
        <div id="likes-post" onClick={filterIdByClick}>{props.likes}</div>
        <div id="ownerName-post" onClick={filterIdByClick}>{props.ownerName}</div>
        <div id="dataAndTime-post" onClick={filterIdByClick}>{props.dataAndTime}</div>
      </div>
    </>
  );
}
