import {createContext, useReducer} from "react";
const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Learning React',
    body:'Hi, I am learning React',
    reactions:10,
    userId:'user-1',
    tags:['learning','Motivation']
},
{
    id: '2',
    title: 'Trip to Goa',
    body:'Hi, I am going to goa',
    reactions:90,
    userId:'user-2',
    tags:['Trip','Memories']
}
]

export const PostList = createContext({
    postList:[],
    addPost: ()=>{},
    deletePost:()=>{}
});

const PostListReducer = (currentPost,action)=>{
    switch (action.type) {
        case "DELETE_POST":
            return currentPost.filter(post => post.id !== action.payload);
        case "ADD_POST":
            return [...currentPost,action.payload];
        default:
            return currentPost;
    }
}
const PostListProvider = ({children})=>{
    const [postList,dispatchPostList] = useReducer(PostListReducer,DEFAULT_POST_LIST);
    const addPost = (newPost)=>{
        console.log("helo");
        dispatchPostList({ type: "ADD_POST", payload: newPost });
    }
    const deletePost = (postId)=>{
        // console.log("delete Post");
        dispatchPostList({ type: "DELETE_POST", payload: postId });
    }
    return <PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>
}


export default PostListProvider;