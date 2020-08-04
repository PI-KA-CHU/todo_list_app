
const initState = {
    items: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case "ADDITEM":
            return {
                items: [...state.items, {
                    text: action.itemValue,
                    completed: false
                }]
            }
        case "DELETEITEM":
            return {
                items: state.items.filter((item, index) => action.index !== index)
            }
        case "CompleteToDo":
            state.items[action.index].completed = !state.items[action.index].completed
            return {items : [...state.items]}
        default:
            return state
    }
}

// import {createReducer} from "@reduxjs/toolkit"
// const initState = {
//     sum : 0
// }
// export default createReducer(initState, {
//     "INCREMENT": ((state,action) => ({sum:state.sum + action.number})),
//     "DECREMENT": ((state,action) => ({sum:state.sum - action.number})),
//     "UNMOUT_COUNTER": ((state,action) => ({sum:state.sum - action.number}))
// }) 
