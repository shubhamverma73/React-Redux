import React from 'react'
import "./App.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";
import {reset} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div classNameName="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(5))}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
      <br/>
      <div className="quantity">
        <a className="reset" title="Reset" onClick={() => dispatch(reset())}><span>Reset</span></a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App