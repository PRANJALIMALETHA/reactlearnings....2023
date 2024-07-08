import './Item.css';
import React from 'react';
function Item(props)
{
    const itemName=props.name;
    return (
        <div className='date'>
           <span>{itemName}</span>
        </div>
    )

}
export default Item;
