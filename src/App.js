import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch } from "react-redux";
import "assets/styles/globals.css";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

import NotFound from "pages/404";
import Unauthenticated from "pages/401";
import Login from "pages/Login";
import MyClass from "pages/MyClass";
import Register from "pages/Register";
import Joined from "pages/Joined";
import DetailsClass from "pages/DetailsClass";

import { setAuthorizationHeader } from "configs/axios";

import users from "constants/api/users";

import { populateProfile } from "store/actions/users";

function App() {
  const dispatch = useDispatch();

  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  useEffect(() => {
    let session = null;
    const microToken = localStorage.getItem("MICRO:token");
    if (microToken) {
      session = JSON.parse(microToken);
      setAuthorizationHeader(session.token);

      users.details().then((res) => {
        dispatch(populateProfile(res.data));
      });
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/:chapter/:uid"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/"
            component={DetailsClass}
          ></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
