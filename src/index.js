import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import reducers from "./reducer";
import "./index.css";
import App from "./App";
import Login from "./container/login/login";
import Register from "./container/register/register";
import BossInfo from "./container/bossinfo/bossinfo";
import GeniusInfo from "./container/geniusinfo/geniusinfo";
import AuthRoute from "./component/authroute/AuthRoute";
import Dashboard from "./component/dashboard/dashboard"
import { createStore } from "redux";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


// function Dashboard(){
//   return <h2>222</h2>
// }
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/bossinfo" exact component={BossInfo} />
          <Route path="/geniusinfo" exact component={GeniusInfo} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route component ={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
