import React from 'react'

class Item extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.index}<button>X</button></div>
            </div>
            
        )
    }
}

export default Item;