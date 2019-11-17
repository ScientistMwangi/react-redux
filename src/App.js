import React  from 'react';
import './App.css';

//redux
import {useSelector,useDispatch} from 'react-redux';
import {Increment,IncrementBy5} from './action/increment';
import Decrement from './action/decrement';


function App() {

  const counter=useSelector(state=>state.Counter);
  const isLogged=useSelector(state=>state.IsLogged);

  const dispatch=useDispatch();

  return (
       <div>
         <h3>Counter:{counter}</h3>
         <button onClick={()=>dispatch(Increment())}>+</button>
         <button onClick={()=>dispatch(Decrement())}>-</button>
         <button onClick={()=>dispatch(IncrementBy5(5))}>INCREMENT BY 5</button>
         {isLogged?'Show Sensitvie Infomation for logged in user':''}

       </div>

  );
}
export default App;
