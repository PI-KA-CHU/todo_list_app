import React from 'react'
import Item from '../item/item'
import { connect } from 'react-redux'

import axiosUtil from '../../axiosUtil'

class FinishTodo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    render() {
        // axiosUtil.axiosGET(this)
        const itemsFilter = this.state.items.filter(item => item.status === true)
        console.log(itemsFilter)
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