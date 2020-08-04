import React from 'react'
import Add from '../Add/add';
import ItemList from '../ItemList/ItemList';
import { connect } from 'react-redux'
import { addItemAction,deleteItemAction } from "../../action"

class ItemGroup extends React.Component {

    render() {
        return (
            <div>
                <Add addItem = {this.props.addItem}/>
                <ItemList deleteItem = {this.props.deleteItem} items = {this.props.items}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {items : state.items}
}

const mapDispatchToProps = dispach => ({
    addItem : (itemValue) => dispach(addItemAction(itemValue)),
    deleteItem : (index) => dispach(deleteItemAction(index))
})

export default connect(mapStateToProps,mapDispatchToProps)(ItemGroup)

