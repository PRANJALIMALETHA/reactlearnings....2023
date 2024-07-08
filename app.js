import logo from './logo.svg';
import './App.css';
 import  Item from './component/Item'
import Itemdate from './component/Itemdate'
function App() {
  return (
    <div>
      <Item name="Nirma"></Item>
      <Itemdate day="24" month="10" year="2004"></Itemdate>
      <Item name="Nirma"></Item>
      <Itemdate day="24" month="10" year="2004"></Itemdate>  
      <Item name="Nirma"></Item>
      <Itemdate day="24" month="10" year="2004"></Itemdate>
      <div>hello jee</div> 
    </div>
  );
}

export default App;
