import axiosUtil from '../axiosUtil'
import React from 'react'
import Item from '../components/item/item'

import Axios from 'axios';

class ShowItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           items:[]
        }
    }
    
    // addItem = () => {
    //     Axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos',{
    //         content:this.input.value,
    //         status:false
    //     }).then((response)=>{
    //         console.log(response.data)
    //     }).catch((error) => {
    //         console.log(error.data)
    //     })
    // }

    addItem = () => {
        console.log("zengjia");
        axiosUtil.axiosPOST({
            content: this.input.value,
            status: false
        })
    }

    handleChange = (item) => {
        axiosUtil.axiosPUT(item)
    }

    deleteItem = (id) =>{
        axiosUtil.axiosDELETE(id)
        axiosUtil.axiosGET(this)
    }


    componentDidMount(){
        axiosUtil.axiosGET(this)
    }
   
    render() {
        return (
            <div>
               <span>
                    <input type= "text" defaultValue = "hahah"/>
                    <button onClick={() => this.addItem()}>Add</button>
               </span>
                {
                    this.state.items.map((item) => 
                        <Item key={item.id}
                        completed = {item.status}
                        text = {item.content}
                        index = {item.id}
                        deleteItem = {this.deleteItem}
                        updateItem = {this.handleChange}
                        />
                    )
                }
            </div>
        )
    }
}

export default ShowItem;


