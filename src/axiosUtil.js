import axios from 'axios'
import {createStore} from 'redux'
import reducers from './reducers/loading';
// import {LOADING_TOGGLE} from "../action/actionTypes"

// export default {
//     axiosGET: (_this) => {
//         //TODO refactor
//         axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
//             .then((response) => {
//                 _this.setState({
//                     items: response.data
//                 })
//             }).catch((error) => {
//                 _this.setState({
//                     error: error
//                 })
//             })
//     },
//     axiosPOST: (postObject) => {
//         axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos', postObject)
//             .then((response) => {

//             }).catch((error) => {
//                 console.log(error);
//             })
//     },

//     axiosPUT:(postObject) => {

//         axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + postObject.id, postObject)
//             .then((response) => {
//                 // return response;
//             }).catch((error) => {
//                 console.log(error);
//             })
        
//     },
//     axiosDELETE: (id) => {
//         axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + id)
//             .then((response) => {
//                 // console.log(response);
//             }).catch((error) => {
//                 console.log(error);
//             })
//     },

// }

const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/";
 
const getTodos = () => axios.get(basicUrl+"todos").then(response => response.data)
const postTodo = (todo) => axios.post(basicUrl+"todos",todo)
const putTodo = (id) => axios.put(basicUrl+"todos/"+id)
const delTodo = (id) => axios.delete(basicUrl+"todos/"+id)

export {getTodos,postTodo,putTodo,delTodo}  