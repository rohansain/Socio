    import { useContext } from "react";
    import { AiFillDelete } from "react-icons/ai";
    import {PostList} from "../store/post-list-store";

    const Post = ({ post }) => {
        
        const {deletePost} = useContext(PostList)
        // console.log("postList",PostList);
        return (
            <div className="card" style={{ width: "23rem", margin: "10px" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                            <AiFillDelete />
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag,index) => (
                        <span key={index} className="badge text-bg-primary hastags">{tag}</span>
                    ))}
                    <div className="alert alert-success card-reactions" role="alert">
                    <p>Reactions: {post.reactions.likes} 👍 | {post.reactions.dislikes} 👎</p>
                    </div>
                </div>
            </div>
        );
    }
    export default Post;