import React from 'react';
import ReactDOM from 'react-dom';

//create a react component 

function clickme(){
    return 'click me!!'
}
const text="enter name"
const style={backgroundColor:'blue',color:'white'}

const App=()=>{
      return <div> 
          <label className="label" htmlFor="name">{text}</label>
          <input id="name" />
          <button style={style}>
              {clickme()}
          </button>
          </div>
  }

//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"))