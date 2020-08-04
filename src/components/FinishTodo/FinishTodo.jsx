import React from 'react'
import Item from '../item/item'
import { connect } from 'react-redux'

class FinishTodo extends React.Component{

    render() {
        const itemsFilter = this.props.items.filter(item => item.completed === true)
        return ( 
            <div>
                {
                    itemsFilter.map((item,index) => (
                        <Item 
                            item = {item}
                            isCompleted = {item.completed}
                            index = {index}
                            updateItem = {this.props.updateItem}
                        />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { items: state.items }
}
const mapDispatchToProps = dispatch => ({
    updateItem: (index) => dispatch({type: "COMPLETETODO", index: index})
})

export default connect(mapStateToProps,mapDispatchToProps)(FinishTodo)