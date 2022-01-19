import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, postSelector } from "../slices/post";
import { Post } from "../components/Post";
import { useParams } from "react-router-dom";

const SinglePostPage = ({match}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id])

  function renderPost() {
    if (postLoading) return <p>Loading post...</p>
    if (postHasErrors) return <p>Unable to display post.</p>

    return <Post post={post} />
  }

  return (
    <section>
      {renderPost()}
    </section>
  )
}

export default SinglePostPage
