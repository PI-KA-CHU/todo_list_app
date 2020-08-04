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
    axiosPOST: (postObject) => {
        axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos', postObject)
            .then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    },

    axiosPUT: (postObject) => {
        axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + postObject.id, postObject)
            .then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    },
    axiosDELETE: (id) => {
        axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + id)
            .then((response) => {
                // console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    },

}