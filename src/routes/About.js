import React from "react";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import YouTube from "../components/YouTube.jsx";
import CommentProp from "../components/comment.jsx";
import auth from "../services/authService.js";
import commentsRoomStyle from "../style/commentRoom.css";

function textShow() {
  var x = document.getElementById("paragraph2");
  console.log(x.style.display);
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

export default class Auth extends React.Component {
  render() {
    console.log(auth.isAuth());

    return (
      <div id="manage">
        <div id="commentRoom">
          <CommentProp />
          <CommentProp />
          <CommentProp />
          <CommentProp />
          <CommentProp />
          <CommentProp />
        </div>
      </div>
    );
  }
}
