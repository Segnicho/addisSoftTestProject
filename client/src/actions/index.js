export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const getPosts = () =>({
    type: GET_POSTS,
});

export const addPost = (post) =>{
    return  {
    type: "CREATE_POST",
    payload :post
    }
};

