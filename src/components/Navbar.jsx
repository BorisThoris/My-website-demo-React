import React from "react";
import auth from "../services/authService.js";
import notify from "../services/notify.js";

export default class Navbar2 extends React.Component {
  onSubmit = () => {
    auth
      .logout()
      .then(() => {
        sessionStorage.clear();
        notify.showInfo("User Logged Out!");
        window.location = "/login";
      })
      .catch(notify.handleError);
  };

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

          <a href="/about">Recent Comments</a>

          <a href="/home">Media</a>

          <a href="/catalogue">Products</a>

          <a href="/user-profile">Profile</a>

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

          <a href="/about">About</a>

          <a href="/home">Media</a>

          <a href="/login">Login</a>

          <a href="/register">Register</a>
        </div>
      );
    }

    return navProp;
  }
}
