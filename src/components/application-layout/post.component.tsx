
export default function Post(props: {
  img: string;
  explen: string;
  likes: string;
  ownerName: string;
  dataAndTime: string;
}) {
  return (
    <>
      <div id="post-controler">
        <img id="img-post" src={props.img} alt="img_post" />
        <h3 id="explen-post">{props.explen}</h3>
        <div id="likes-post">{props.likes}</div>
        <div id="ownerName-post">{props.ownerName}</div>
        <div id="dataAndTime-post">{props.dataAndTime}</div>
      </div>
    </>
  );
}
