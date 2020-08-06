import React from 'react';
import './App.css';
import FinishTodo from './components/FinishTodo/FinishTodo'
// import HeaderPage from './page/HeaderPage/HeaderPage'
import ShowItems from './axiosComponent/ShowItems'
import { HashRouter, Route } from 'react-router-dom'


function App(props) {
  return (

    <HashRouter>
      {/* <HeaderPage /> */}
      <Route path="/" exact component={ShowItems}></Route>
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



