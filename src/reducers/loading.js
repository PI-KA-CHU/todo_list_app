const initState = {
    loading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case "LOADINGON":
            return {
                loading: true
            }
        case "LOADINGOFF":
            return {
                loading: false
            }
        default:
            return state
    }
}