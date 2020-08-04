import React from 'react';
import './App.css';
import ItemGroup from './components/ItemGroup/ItemGroup';
import FinishTodo from './components/FinishTodo/FinishTodo'
import {HashRouter, Route} from 'react-router-dom'


function App(props) {
  return (
    <HashRouter>
      <Route path="/" exact component={ItemGroup}></Route>
      <Route path="/finish" exact component={FinishTodo}></Route>
    </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <ItemGroup/>
    //   </header>
    // </div>
  );
}
export default App;



