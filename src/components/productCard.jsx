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
