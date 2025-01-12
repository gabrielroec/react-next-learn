import Post from "../Post/Post";
import styles from "./PostList.module.css";
const PostList = () => {
  return (
    <ul className={styles.postList}>
      <li>
        <Post author="Gabriel" body="React.js post" />
      </li>
      <li>
        <Post author="John" body="React.js post" />
      </li>
    </ul>
  );
};

export default PostList;
