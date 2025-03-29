import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const titleRef = useRef();
  const contentRef = useRef();
  const userIdRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title: titleRef.current.value,
      body: contentRef.current.value,
      userId: userIdRef.current.value,
      reactions: Number(reactionsRef.current.value),
      tags: tagsRef.current.value.split(",").map(tag => tag.trim()),
    };

    addPost(newPost);
  };

  return (
    <form className="app-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="post-userId" className="form-label">UserId</label>
        <input type="text" className="form-control" id="post-userId" ref={userIdRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="post-title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="post-title" ref={titleRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="post-description" className="form-label">Post Content</label>
        <textarea className="form-control" id="post-description" ref={contentRef}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="post-reactions" className="form-label">Reactions</label>
        <input type="number" className="form-control" id="post-reactions" ref={reactionsRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="post-tags" className="form-label">Tags (comma-separated)</label>
        <textarea className="form-control" id="post-tags" ref={tagsRef}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default CreatePost;
