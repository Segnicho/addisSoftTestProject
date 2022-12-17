
import {GET_POSTS_SUCCESS}  from '../actions/index'
const postReducer = (state = { posts : [] }, action) =>{
    switch (action.type) {
        // case 'GET_POSTS':
        //     return {...state, loading : true};
        //     break;
        case GET_POSTS_SUCCESS:
                return { ...state, posts: action.posts, loading: false }
        
        case type.CREATE_POST_SUCCESS:
                    return [...state.posts, action.payload]
        default:
            return state;
    }
}
export default postReducer;