import React from "react";

import NavBar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import YouTube from "react-youtube";

export default class Home extends React.Component {
  render() {
    const opts = {
      height: "720",
      width: "1280",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div id="manage">
        <div id="YouTubeHolder2">
          <YouTube videoId="zvlKjTQJqHk" opts={opts} onReady={this._onReady} />
        </div>
      </div>
    );
  }
}
