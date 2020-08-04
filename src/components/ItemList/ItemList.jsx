import React from 'react'
import Item from '../item/item';
import { connect } from 'react-redux'

class ItemList extends React.Component {

    render() {
        const initArray = this.props.items;
        // console.log(this.props.items)
        return (
            <div>
                {
                    initArray.map((item,index) => (
                        <Item key={index}
                        item = {item}
                        index = {index}
                        deleteItem = {this.props.deleteItem}/>
                    ))
                }
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({ type: "DELETEITEM", index: index })
})

export default connect(null,mapDispatchToProps)(ItemList)