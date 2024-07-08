import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Header from '../components/Header';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from an API or mock data
    setPosts([
      { id: 1, title: 'Post 1', description: 'This is the first post.' },
      { id: 2, title: 'Post 2', description: 'This is the second post.' },
    ]);
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
