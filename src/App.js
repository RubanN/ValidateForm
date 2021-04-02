import {useState} from "react";
import "./App.css";
import Home from './components/Home'
import Employee from './components/Employee'

const App = () => {
    

  return (
    <div className="app">
         <Employee FirstName="ruban" lastName="V"/>
         <Employee FirstName="jack" lastName="V"/>
         <Employee FirstName="cricket" lastName="Y"/>
         <Employee FirstName="google" lastName="G"/>
         <Employee FirstName="ruban" lastName="G"/>
         
         </div>
  );
};
export default App;
