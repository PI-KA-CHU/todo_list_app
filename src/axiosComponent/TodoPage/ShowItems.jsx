import axiosUtil from '../../axiosUtil'
import React from 'react'
import Item from '../../components/item/item'

import Axios from 'axios';

class ShowItem extends React.Component{
    constructor(props){
        super(props)
       this.state ={
           items:[]
        }
    }


    componentDidMount(){
        axiosUtil.get(this)
        
    }

   
    render() {
        return (
            <div>
               <span>
                    <input type= "text" onChange="handleChange"/>
                    <button onClick={this.onClick}>Add</button>


               </span>
                {
                    this.state.items.map((item) => 
                        <Item key={item.id}
                        item = {item.context}
                        isCompleted = {item.completed}
                        index = {item.id}
                        deleteItem = {this.props.deleteItem}
                        updateItem = {this.props.updateItem}
                        />


                    )




                }






            </div>
        )
    }
}

export default ShowItem;


