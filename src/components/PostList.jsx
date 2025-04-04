import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import { useContext } from "react";
import Welcome from "./Welcome";
const PostList = ()=>{
    const {postList,addInitialPosts} = useContext(PostListData);
    // console.log(postList);
    const handleGeneratePost = ()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts);
        });
    }
    return (
        <>
        {postList.length ==0 && <Welcome generatePost={handleGeneratePost}/>}
        {postList.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </>
    );
}
export default PostList;