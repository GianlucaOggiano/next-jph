import { useState } from 'react';
import axios from '../axios';

const Home = ({ posts }) => {
  const [allPosts] = useState(posts);

  return (
    <div>
      {allPosts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const { data: posts } = await axios.get('/posts');

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Home;
