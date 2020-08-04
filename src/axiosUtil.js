import axios from 'axios'

export default {
    axiosGET: (_this) => {
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
            .then((response) => {
                _this.setState({
                    items: response.data
                })
            }).catch((error) => {
                _this.setState({
                    error: error
                })
            })
    },
    axiosPOST: (postObject, successCallBack, errorCallBack) => {
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos', postObject)
            .then((response) => {
                successCallBack(response)
            }).catch((error) => {
                errorCallBack(error)
            })
    },

    axiosPUT: (postObject, successCallBack, errorCallBack) => {
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos' + postObject.id, postObject)
            .then((response) => {
                successCallBack(response)
            }).catch((error) => {
                errorCallBack(error)
            })
    },
    axiosDELETE: (id, successCallBack, errorCallBack) => {
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + id)
            .then((response) => {
                successCallBack(response)
            }).catch((error) => {
                errorCallBack(error)
            })
    },

}