export default function Comment({ comment }) {
  return (
    <aside className="comment">
      <h2>{comment.title}</h2>
      <h3>{comment.email}</h3>
      <p>{comment.body}</p>
    </aside>
  )
}