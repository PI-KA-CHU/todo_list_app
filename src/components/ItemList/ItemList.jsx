import React from 'react'

class ItemList extends React.Component{

    render(){
        const initArray = [...Array(this.props.items.size).keys()];
        console.log(this.props.items)
        return (
            <div>
                {initArray.map(key =>
                    <div key={key}>{key}</div> 
                )}
            </div>
        )
    }
}

export default ItemList;