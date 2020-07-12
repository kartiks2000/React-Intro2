import React,{ useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const App = () => {

  const [infostate, infosetstate] = useState({
    person : [
      {name : "kartik s." , age : 20},
      {name : "aishwary s." , age : 14},
    ]
  });

  const SwitchNameHandler = () => {
    infosetstate({
      person : [
        {name : "kartik" , age : 19},
        {name : "aishwary" , age : 15},
      ]
    });
  }


    return (
      <div className="App">
        <h1>Hi,kartik this side!!!!</h1>
        <h3>Hope u guys are doing good..</h3>
        <button onClick={SwitchNameHandler}>switch name</button>
        <Person name={infostate.person[0].name} age={infostate.person[0].age} position="CTO">i like coding.</Person>
        <Person name={infostate.person[1]["name"]} age={infostate.person[1]["age"]} position="CEO">i like video games.</Person>
      </div>
    );
  }  

export default App;



// state = {
//   person : [
//     {name : "kartik s." , age : 20},
//     {name : "aishwary s." , age : 14},
//   ]
// }

// SwitchNameHandler = () => {
//   this.setState({
//     person : [
//       {name : "kartik" , age : 19},
//       {name : "aishwary" , age : 15},
//     ]
//   })
// }