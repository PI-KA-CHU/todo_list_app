import React from 'react'
import Item from '../item/item';
import { connect } from 'react-redux'
import { deleteItemAction, updateItemAction } from '../../action';

class ItemList extends React.Component {

    render() {
     
        
        return (
            <div>
                {
                    this.props.items.map((item,index) => (
                        <Item key={index}
                        item = {item}
                        isCompleted = {item.completed}
                        index = {index}
                        deleteItemAction = {this.props.deleteItemAction}
                        updateItemAction = {this.props.updateItemAction}
                        />
                    ))
                }
            </div>
        )
    }
}

const mapDispatchToProps =(
    deleteItemAction(),
    updateItemAction()
)


export default connect(null,mapDispatchToProps)(ItemList)