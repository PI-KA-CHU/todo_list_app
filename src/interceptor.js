import axiosUtil from './axiosUtil'
import store from './store'

axiosUtil.axiosGET.interceptors.request.use(req => {
    store.dispatch({
        type: "LOADING_TOGGLE" , payload:{loading: true}
    })
})



axiosUtil.axiosGET.interceptors.request.use(req => {
    store.dispatch({
        type: "LOADING_TOGGLE" , payload:{loading: true}
    })
})

