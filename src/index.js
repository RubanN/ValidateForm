import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from "redux"
// import { App }  from './App'
import { Provider } from 'react-redux'

//Selector 
const VAIVELU_COMEDY = "VAIDVELU_COMEDY";
const GOUNDMANI_COMEDY = "GOUNDMANI_COMEDY";

// Action
const vadivelComedyAction = ()=>({type:VAIVELU_COMEDY})
const goundamaniComedyAction = ()=>({type:GOUNDMANI_COMEDY})

// Reducer
const comedyReducer =(state,actions)=>{
  switch(actions.type){
    case VAIVELU_COMEDY:
    return state ="dei kaipulla innum da thugura"
    case GOUNDMANI_COMEDY:
      return state ="Arasiayal ah ithellam saathranappa"
      default:
        return state="No comedy selected"
  }
}
let store = createStore(comedyReducer);
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(vadivelComedyAction())
store.dispatch(goundamaniComedyAction())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
