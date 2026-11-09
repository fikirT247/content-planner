import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import PostList from "./PostList.jsx";
import AddPost from "./AddPost.jsx";

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // add a new post (from the + form)
  const handleAdd = (form) => {
    const newPost = { id: Date.now(), ...form, isStatus: false, tasks: [] };
    setPosts((prev) => [...prev, newPost]);
  };

  // mark one post as done
  const handleDone = (id) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, isStatus: true } : post))
    );
  };

  // delete a whole post
  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  // add a task to one post
  const handleAddTask = (id, text) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, tasks: [...(post.tasks || []), text] }
          : post
      )
    );
  };

  // remove one task from one post
  const handleRemoveTask = (id, index) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, tasks: (post.tasks || []).filter((t, i) => i !== index) }
          : post
      )
    );
  };

  return (
    <>
      <div className="top-bar">
      <Header />
      <AddPost onAdd={handleAdd} />
      <PostList
        posts={posts}
        onDone={handleDone}
        onDelete={handleDelete}
        onAddTask={handleAddTask}
        onRemoveTask={handleRemoveTask}
      />
      </div>
      
    </>
  );
}

export default App;