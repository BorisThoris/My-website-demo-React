import React from "react";
import auth from "../services/authService.js";
import notify from "../services/notify.js";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

class Navbar2 extends React.Component {
  onSubmit() {
    auth
      .logout()
      .then(() => {
        sessionStorage.clear();
        notify.showInfo("User Logged Out!");
        this.props.history.push("/about");
      })
      .catch(notify.handleError);
    console.log(":(");
  }

  render() {
    const isLoggedIn = auth.isAuth();
    let navProp;

    if (isLoggedIn) {
      let username = sessionStorage.getItem("username");

      navProp = (
        <div id="menu">
          <div class="logoLi">
            <span class="logo">
              <img
                src="https://s1.gifyu.com/images/kill_your_gorilla6.gif"
                alt="kill_your_gorilla6"
                id="logoImg"
                alt="err"
                width="90"
                height="90"
              />
            </span>
          </div>

          {/* <Link to href={"/about"}>
            Recent Comments
          </Link> */}

          <Link to={"/home"}>Media</Link>

          <Link to={"/catalogue"}>Products</Link>

          <Link to={"/user-profile"}>Profile</Link>

          <a onClick={() => this.onSubmit()}>Logout</a>

          <div id="profile">
            Gorilla:
            <img
              id="profilePicNav"
              src={sessionStorage.getItem("profilePic")}
              alt="kill_your_gorilla6"
              alt="err"
              width="50"
              height="50"
            />
            <div id="a2" href="/user-profile">
              {username}
            </div>
          </div>
        </div>
      );
    } else {
      navProp = (
        <div id="menu">
          <img
            id="logoImg"
            src="https://s1.gifyu.com/images/kill_your_gorilla6.gif"
            alt="kill_your_gorilla6"
            alt="err"
            width="90"
            height="90"
          />
          {/* 
          <Link to={"/about"}>About</Link> */}

          <Link to={"/home"}>Media</Link>

          <Link to={"/login"}>Login</Link>

          <Link to={"/register"}>Register</Link>
        </div>
      );
    }

    return navProp;
  }
}

export default withRouter(Navbar2);
