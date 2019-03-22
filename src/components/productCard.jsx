import React from "react";
import auth from "../services/authService.js";
import notify from "../services/notify.js";
import { Link } from "react-router-dom";

export default class ProductCard extends React.Component {
  onSubmit = () => {};

  render() {
    return (
      <div class="card">
        <h1 id="productCardTitle">{this.props.productName}</h1>
        <div id="arrowLeft">
          <img
            src="https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/15064945/Left-Arrow-PNG-Download-Image.png"
            alt="Smiley face"
            height="42"
            width="42"
            id="arrowLeftPic"
          />
        </div>
        <div id="arrowRight">
          <img
            src="http://pixsector.com/cache/ef1ee4a1/av85f1b171d762037fe92.png"
            alt="Smiley face"
            height="42"
            width="42"
            id="arrowRightPic"
          />
        </div>
        <img
          src={this.props.imgUrl}
          id="productCardImage"
          alt="kill_your_gorilla6"
          alt="err"
          width="300"
          height="350"
        />
        <Link to={`/product-view/${this.props.id}`} activeClassName="active">
          <button id="button3">More Information</button>
        </Link>
      </div>
    );
  }
}
