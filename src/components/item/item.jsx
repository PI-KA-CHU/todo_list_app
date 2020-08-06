import React from 'react'
import { Switch } from 'antd';
import "antd/dist/antd.css";
import {getTodos,putTodo,delTodo,postTodo} from '../../axiosUtil'
class Item extends React.Component {

    deleteTodo = (id) => {
       
        delTodo(id).then(() =>{this.props.deleteItem(id)})
        this.props.deleteItem(this.props.index);
    }

    finishToDo = () => {
        putTodo(this.props.index).then(() =>{
            this.props.updateItem(this.props.index)
        })

    }

    render() {
        return (
            <div>
                <div>
                    <label onClick={() => this.finishToDo()}
                                style={{ textDecorationLine: this.props.Item.status ? 'line-through' : 'none' }}>
                        {this.props.text}
                    </label>
                    {/* <Switch defaultChecked onChange={() => this.props.updateItem(this.props.item)} /> */}
                    <Switch defaultChecked onChange={this.finishToDo} checked = {this.props.status}/>
                    <button onClick={() => this.props.deleteItem(this.props.index)}>X</button>
                </div>
            </div>
        )
    }
}

export default Item
