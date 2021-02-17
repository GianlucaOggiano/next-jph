import axios from '../axios';
import HomeIntro from '../components/HomeIntro';
import Post from '../components/Post';

const Home = ({ posts }) => {
  return (
    <div className='page-content home'>
      <HomeIntro />
      <div className='home__posts-wrapper'>
        <div className='home__posts-content'>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const { data: posts } = await axios.get('/posts');
    const { data: users } = await axios.get('/users');

    posts.map((post) => {
      const user = users.find((u) => u.id === post.userId);
      post.user = { id: user.id, name: user.name };
    });

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
