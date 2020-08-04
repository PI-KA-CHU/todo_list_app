import React from 'react'
import Item from '../item/item';
import { connect } from 'react-redux'
import axiosUtil from '../../axiosUtil'

class ItemList extends React.Component {
   componentDidMount() {
       axiosUtil.GET(
           (response)=>{
                console.log(response.data);
           },
           (error) => {
                console.log(error);
           }
       )
   }

    render() {
     
        // console.log(this.props.items)
        return (
            <div>
                {
                    this.props.items.map((item,index) => (
                        <Item key={index}
                        item = {item}
                        isCompleted = {item.completed}
                        index = {index}
                        deleteItem = {this.props.deleteItem}
                        updateItem = {this.props.updateItem}
                        />
                    ))
                }
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({ type: "DELETEITEM", index: index }),
    updateItem: (index) => dispatch({type: "COMPLETETODO", index: index})
})

export default connect(null,mapDispatchToProps)(ItemList)