import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  faArrowLeft,
  faCartShopping,
  faHeart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { removefromwishlist } from "../redux/wishlistslice";
import { addtocart } from "../redux/cartslice";
import Aos from "aos";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistreducer);
  const dispatch = useDispatch();

  const handlewishlist = (item) => {
    dispatch(addtocart(item));
    dispatch(removefromwishlist(item.id));
  };

  useEffect(()=>{
    Aos.init({duration:2000})
  })

  return (
    <>
    <div data-aos="fade-right">
    <div className="container d-flex justify-content-center align-items-center">
        <h5 className="fw-bold fs-1">
          WISHLISTS <FontAwesomeIcon className="text-danger" icon={faHeart} />{" "}
        </h5>
      </div>
      <hr />
      <Link className="ms-5 " to={"/"}>
        <button className="btn btn-dark mt-4 ">
          <FontAwesomeIcon className="me-2" icon={faArrowLeft} /> back to home
        </button>
      </Link>
      <div className=" produt-listing mt-5 ">
        {wishlistItems?.length > 0 ? (
          wishlistItems.map((item) => (
            <div>
              <Card
                style={{ width: "20rem", border: "solid 2px" }}
                className="mt-4 ms-4"
              >
                <Card.Img
                  variant=""
                  src={item.image}
                  style={{ height: "300px" }}
                  className="p-4"
                />
                <Card.Body>
                  <Card.Title className="text-center fw-bolder">
                    {item.title.substring(0, 10)}
                  </Card.Title>
                  <Card.Text className=" text-center    ms-1">
                    ₹ {item.price}
                  </Card.Text>
                  <div className="d-flex justify-content-center align-items-center mt-4 ">
                    <Button
                      variant="outline-success"
                      onClick={() => handlewishlist(item)}
                      className="me-5 "
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => dispatch(removefromwishlist(item.id))}
                      className="ms-5"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="ms-auto me-auto mt-4">
            <img
              src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
      
    </>
  );
}

export default Wishlist;
