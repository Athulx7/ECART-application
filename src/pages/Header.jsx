import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

function Header() {
    const wishlist = useSelector((state)=>state.wishlistreducer)
    const cartlist = useSelector((state)=>state.cartreducer)
    
  return (
    <>
      <div className="container header-main  d-flex">
        <div className="mainhead ">
          <Link className="headerlinks" to={'/'}>
            <h2 className="fw-bolder fs-1  ms-3 mt-4  ekarthead  ">E CART</h2>
            <h5 className="fw-bold  ms-3 appli">APPLICATION</h5>
          </Link>
        </div>

        <div className="cartwish d-flex ms-auto mt-5">
          <div className="carts">
            <Link to={'/wishlist'} >
            
            <button className="btn btn-danger">
              <FontAwesomeIcon icon={faHeart} className="me-2" /> WISHLIST
              <Badge bg="" className="fs-6">
                {wishlist?.length}
              </Badge>
            </button>
            </Link>
            
          </div>

          <div className="wishlist ms-4">
            <Link to={'/cart'} >
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCartShopping} className="me-2" /> CART{" "}
              <Badge bg="" className=" fs-6  ">
                {cartlist?.length}
              </Badge>
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
