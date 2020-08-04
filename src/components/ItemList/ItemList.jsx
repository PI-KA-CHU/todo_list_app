import React from 'react'
import Item from '../item/item';

class ItemList extends React.Component {

    render() {
        const initArray = this.props.items;
        // console.log(this.props.items)
        return (
            <div>
                {
                    initArray.map(key => (
                        <Item key={key} index = {key} />
                    )
                    )
                }
            </div>
        )
    }
}

export default ItemList;