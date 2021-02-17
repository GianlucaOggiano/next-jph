import Link from 'next/link';
import capitalize from '../helpers/capitalize';
import excerpt from '../helpers/excerpt';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <small>Author: {post.user.name}</small>
      <Link href={`/posts/${post.id}`}>
        <a>
          <h2>{capitalize(post.title)}</h2>
          <p>{excerpt(post.body)}</p>
        </a>
      </Link>
    </div>
  );
};

export default Post;
