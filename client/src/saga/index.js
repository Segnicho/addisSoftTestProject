import { put,call,takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_POSTS, GET_POSTS_SUCCESS } from '../actions/index';
const URL = 'http://localhost:5000/api'

function  fetchPosts() {
    return axios.get(`${URL}/posts`).then(response=>response.data)
}
const   addPost = async (newPosts) => {
    const res = await axios.post(`${URL}/posts`, newPosts)
    // console.log(res.data);
}
function* createPost({payload}) {
    try {
        const post =  yield call(createPost,payload)
        yield put({type: "CREATE_POST_SUCCESS",newPosts:post})
    } catch (error) {
        yield put({ type: "POST_FAILED",message:error.message})
    }
}

function*  workGetPostsFetch() {
    const posts = yield call(fetchPosts)
    yield put({type: GET_POSTS_SUCCESS, posts})

}

function* postSaga (){
    yield takeEvery(GET_POSTS, workGetPostsFetch)
    yield takeEvery("CREATE_POST",createPost)

}

export default postSaga;
