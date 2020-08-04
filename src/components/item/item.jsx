import React from 'react'

class Item extends React.Component {

    deleteTodo = () => {
        this.props.deleteItem(this.props.index);
        
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.item}
                    <button onClick = {this.deleteTodo}>X</button>
                </div>
            </div>

        )
    }
}

export default Item
