import logo from './logo.svg';
import './App.css';
 import  Item from './component/Item'
import Itemdate from './component/Itemdate'
function App() {
  const arr = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemyear:"1990",
      
    },
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemyear:"1990",
      
    },
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemyear:"1990",
      
    },
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemyear:"1990",
      
    },
  ];
  return (
    <div>
      <Item name={arr[0].itemName}></Item>
      <Itemdate day={arr[0].itemDate}     month={arr[0].itemMonth} year={arr[0].itemyear}></Itemdate>
      <Item name={arr[1].itemName}></Item>
      <Itemdate day={arr[1].itemDate} month={arr[1].itemMonth} year={arr[0].itemyear}></Itemdate>  
    
      <div>hello jee</div> 
    </div>
  );
}

export default App;
