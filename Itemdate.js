import React from 'react';
function Itemdate(props){
    const  a=props.day;
    const b=props.month;
    const c=props.year;
    
    return(
        <div className="date">
            <span>{a}</span>
            <span>{b}</span>
            <span>{c}</span>
        </div>
      

    );

}
export default Itemdate;
