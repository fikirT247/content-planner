import { useState } from "react";

function AddPost(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", platformTag: "TikTok", date: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.title.trim() === "") return;
    props.onAdd(form);
    setForm({ title: "", platformTag: "TikTok", date: "" });
    setOpen(false);
  };

  return (
    <div className="add-post">
      <button className="plus-btn" onClick={() => setOpen(!open)}>
        {open ? "✕" : "+"}
      </button>

      {open && (
        <div className="add-form">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Post title"
          />
          <select name="platformTag" value={form.platformTag} onChange={handleChange}>
            <option>TikTok</option>
            <option>Instagram</option>
            <option>Telegram</option>
            <option>Facebook</option>
          </select>
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            placeholder="Date (e.g. Hidar 2)"
          />
          <button className="done" onClick={handleSubmit}>Add Post</button>
        </div>
      )}
    </div>
  );
}

export default AddPost;