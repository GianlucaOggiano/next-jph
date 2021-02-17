import axios from '../../axios';
import capitalize from '../../helpers/capitalize';

const post = ({ post, user }) => {
  console.log(user);
  return (
    <div className='article'>
      <h1>{capitalize(post.title)}</h1>
      <small>Author: {user.name}</small>
      <p>{capitalize(post.body)}</p>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const { data: post } = await axios.get(`/posts/${id}`);
  const { data: user } = await axios.get(`/users/${post.userId}`);

  return {
    props: {
      post,
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const { data: posts } = await axios.get('/posts');

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
