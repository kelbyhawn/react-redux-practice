import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts, postsSelector } from "../slices/posts";
import { Post } from "../components/Post";


const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasErrors } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map(post => <Post key={post.id} post={post} />)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

// Connect Redux to React
export default PostsPage;