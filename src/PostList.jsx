import Card from "./Card";

function PostList(props) {
  return (
    <div className="card-list">
      {props.posts.length === 0 && (
        <p className="empty">No posts yet. Click + to add your first one!</p>
      )}
      {props.posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          platformTag={post.platformTag}
          isStatus={post.isStatus}
          title={post.title}
          date={post.date}
          tasks={post.tasks || []}
          onDone={props.onDone}
          onDelete={props.onDelete}
          onAddTask={props.onAddTask}
          onRemoveTask={props.onRemoveTask}
        />
      ))}
    </div>
  );
}

export default PostList;