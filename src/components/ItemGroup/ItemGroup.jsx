import React from 'react'
import Add from '../Add/add';
import ItemList from '../ItemList/ItemList';
import { connect } from 'react-redux'

class ItemGroup extends React.Component {

    render() {
        return (
            <div>
                <Add addItem={this.props.addItem} />
                <ItemList items={this.props.items} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { items: state.items }
}

const mapDispatchToProps = dispatch => ({
    // addItem : (itemValue) => dispach(addItemAction(itemValue)),
    // deleteItem : (index) => dispach(deleteItemAction(index))
    addItem: (itemValue) => dispatch({ type: "ADDITEM", itemValue: itemValue })
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemGroup)

