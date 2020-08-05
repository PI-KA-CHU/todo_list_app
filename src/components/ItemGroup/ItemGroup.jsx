import React from 'react'
import Add from '../Add/add';
import ItemList from '../ItemList/ItemList';
import { connect } from 'react-redux'
import {addItemAction}from '../../action/action_type'
import {deleteItemAction}from '../../action/action_type'

class ItemGroup extends React.Component {

    render() {
        return (
            <div>
                <Add addItemAction={this.props.addItemAction} />
                <ItemList items={this.props.items} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { items: state.items }
}


const mapDispatchToProps = {
    addItemAction,
    deleteItemAction
}

// const mapDispatchToProps = dispatch => ({
//     // addItem : (itemValue) => dispach(addItemAction(itemValue)),
//     // deleteItem : (index) => dispach(deleteItemAction(index))
//     addItem: (itemValue) => dispatch({ type: "ADDITEM", itemValue: itemValue })
// })

export default connect(mapStateToProps, mapDispatchToProps)(ItemGroup)

