const PostCard = ({ post }) => {
    return (
      <div className="p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.description}</p>
      </div>
    );
  };
  
  export default PostCard;
  