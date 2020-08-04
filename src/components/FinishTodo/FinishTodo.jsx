import React from 'react'
import Item from '../item/item'
import { connect } from 'react-redux'

class FinishTodo extends React.Component{

    render() {
        const itemsFilter = this.props.items.filter(item => item.completed === true)
        return ( 
            <div>
                {
                    itemsFilter.map(item => (
                        <Item 
                            item = {item}
                            isCompleted = {item.completed}
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

export default connect(mapStateToProps)(FinishTodo)