/* eslint-disable react/prop-types */
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;
