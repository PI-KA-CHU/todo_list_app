import React from 'react'
// import axiosUtil from '../../axiosUtil'

class Item extends React.Component {

    deleteTodo = () => {
        this.props.deleteItem(this.props.index);
        
    }

    finishToDo = () => {
        console.log(this.props.index);
        this.props.updateItem(this.props.index);
    }

    render() {
        return (
            <div>
                <div>
                    <label onClick = {() => this.props.updateItem({id: this.props.index,content: this.props.text, states: !this.props.completed})} style={{ textDecorationLine: this.props.completed ? 'line-through' : 'none' }}>
                         {this.props.text}
                    </label>
                    <button onClick = {() => this.props.deleteItem(this.props.index)}>X</button>
                </div>
            </div>
        )
    }
}

export default Item
