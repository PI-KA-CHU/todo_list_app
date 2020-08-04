import React from 'react'

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
                    <label onClick = {this.finishToDo} style={{ textDecorationLine: this.props.item.completed ? 'line-through' : 'none' }}>
                         {this.props.item.text}
                    </label>
                    <button onClick = {this.deleteTodo}>X</button>
                </div>
            </div>

        )
    }
}

export default Item
