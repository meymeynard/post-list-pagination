import "./styles.css";

const Post = ({ data: { title, body, id } }) => {
  console.log("title", title);
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
