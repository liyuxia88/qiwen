import React, { Component } from 'react';
import { GlobalStyled } from './style.js';
import Header from "./common/header/index.js"
import store from "./store"
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import Login from "./pages/login"
import Home from "./pages/home"
import Detail from "./pages/detail"
import Write from "./pages/write"
class App extends Component {
  render () {
    return (
      <div>
        <div className="header">
          <Provider store={store}>
            <GlobalStyled />
            <Header />
            <br></br>
            <BrowserRouter>
              <Route path="/login" exact component={Login}
              ></Route>
              <Route path="/" exact component={Home}
              ></Route>
              <Route path="/write" exact component={Write}
              ></Route>
              <Route path="/detail/:id" exact component={Detail}
              ></Route>
            </BrowserRouter>
          </Provider>
        </div>
      </div>

    );
  }
}

export default App;
