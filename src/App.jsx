import { useDispatch, useSelector } from "react-redux"
import "./App.css";

export default function App(){
  const val=useSelector((s)=>s.count);
  const dispatch =useDispatch();

  return(

  <div>
    <h3>redux using to create counting numbers</h3>
  <h1>{val}</h1>
  <button onClick={()=>dispatch({type:"inc"})}>inc</button>
  <button onClick={()=>dispatch({type:"dec"})}>dec</button>
  <button onClick={()=>dispatch({type:"reset"})}>reset</button>
 </div>)

}