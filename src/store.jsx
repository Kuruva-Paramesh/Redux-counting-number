import { createStore } from "redux";
const initialstate={count:0};
function reducer(state=initialstate,action)
{
  switch (action.type){
  case "inc":
    return {count:state.count+1};
    case "dec":
      return {count:state.count-1};
    case "reset":
      return {count:0}  
      default :
      return state;

  }

}
const store =createStore(reducer);
export {store};