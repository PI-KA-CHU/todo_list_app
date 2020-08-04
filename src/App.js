import React from 'react';
import './App.css';
import ItemGroup from './components/ItemGroup/ItemGroup';
import FinishTodo from './components/FinishTodo/FinishTodo'
import HeaderPage from './components/HeaderPage/HeaderPage'
import TodoPage from './axiosComponent/TodoPage/TodoPage'
import ShowItems  from './axiosComponent/TodoPage/ShowItems'
import {HashRouter, Route} from 'react-router-dom'
import ShowItem from './axiosComponent/TodoPage/ShowItems';


function App(props) {
  return (
    // <HashRouter>
    //   <HeaderPage/>
    //   <Route path="/" exact component={ItemGroup}></Route>
    //   <Route path="/finish" exact component={FinishTodo}></Route>
    // </HashRouter>

    <ShowItems />

    // <div className="App">
    //   <header className="App-header">
    //     <ItemGroup/>
    //   </header>
    // </div>
  );
}
export default App;



