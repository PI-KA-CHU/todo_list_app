import axiosUtil from '../../axiosUtil'
import React from 'react'

import Axios from 'axios';

class TodoPage extends React.Component{
    addItem = () => {
        Axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos',{
            content:this.input.value,
            status:false
        }).then((response)=>{
            console.log(response.data)
        }).catch((error) => {
            console.log(error.data)
        })
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this.input = input} defaultValue=""/>
                <button onClick={this.addItem.bind(this)}>Add</button>
            </div>
        )
    }
}

export default TodoPage;


