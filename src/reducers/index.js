
// const initState = {
//     items: []
// }

export default (state = [], action) => {
    switch (action.type) {
        case "ADDITEM":
            return [...state, ...action.content]
        case "DELETEITEM":
            return state.filter(todo => todo.id !== action.id);
        case "COMPLETETODO":
            return state.map(todo => todo.id === action.id ? {...todo, status: !todo.status} : todo);
        default:
            return state
    }
}

