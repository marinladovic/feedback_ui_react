function App() {
  const title = 'Blog Post';
  const body = 'This is the new blog body';
  const comments = [
    { id: 1, body: 'Great post' },
    { id: 2, body: 'Thanks for the post' },
    { id: 3, body: 'I like your style' },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </div>
  );
}

export default App;
