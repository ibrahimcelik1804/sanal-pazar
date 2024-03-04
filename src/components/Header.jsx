import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const state = useSelector((store) => store.basket);
  // sepetteki tüm elemanların amount degerini topladik
  const totalAmount = state.basket.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <nav className="navbar navbar-light bg-body-tertiary position-sticky top-0 z-3 shadow shadow-lg">
      <div className="container-fluid">
        <Link to="/" className=" d-flex gap-3 navbar-brand" href="#">
          <img
            src="vite.svg"
            alt=""
            width="35"
            height="30"
            className="d-inline-block align-text-top"
          />
          <h4 className="text-success">Sanal Pazar</h4>
        </Link>
        <div className="d-flex gap-3">
          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink className={"d-flex gap-1"} to="/sepet">
            <span>Sepet</span>
            <span className="badge bg-danger mx-2">{totalAmount}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
