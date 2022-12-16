import { put,call,takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_POSTS, GET_POSTS_SUCCESS } from '../actions/index';

function  fetchPosts() {
    return axios.get('http://localhost:5000/api/posts').then(response=>response.data)
}

function*  workGetPostsFetch() {
    const posts = yield call(fetchPosts)
    yield put({type: GET_POSTS_SUCCESS, posts})

}


function* postSaga (){
    yield takeEvery(GET_POSTS, workGetPostsFetch)
}

export default postSaga;
