import React from 'react'

class Add extends React.Component {

    addItem = () => {
        const inputValue = this.input.value
        this.props.addItem(inputValue);
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

export default Add;