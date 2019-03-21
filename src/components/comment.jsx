import React from "react";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import YouTube from "../components/YouTube.jsx";
import auth from "../services/authService.js";
import commentsStyle from "../style/commentStyle.css";

export default class comment extends React.Component {
  render() {
    let userPic = sessionStorage.getItem("profilePic");
    console.log(auth.isAuth());

    return (
      <div id="commentCard">
        <textarea
          id="commentText"
          placeholder=" lololololool sad bro |XXDXDXDXDXDX"
        />
        <div id="otherInfo">
          <img
            src={userPic}
            alt="userPic"
            id="userPicCom"
            height="200"
            width="200"
          />
          <div id="nameAndRating">
            <h2>Boris</h2>
            <h2>02/02/1998</h2>
          </div>
        </div>
      </div>
    );
  }
}
