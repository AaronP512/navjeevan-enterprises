import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>Your cart is currently empty</h1>
          <Link to="/">
            <ButtonContainer>Add Products to Cart</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
