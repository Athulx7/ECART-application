import {
  faArrowLeft,
  faBagShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { emptycarts, removefromcart } from "../redux/cartslice";
import Aos from "aos";

function Cart() {
  const cartitems = useSelector((state) => state.cartreducer);

  const navigate = useNavigate();

  const toasttesting = () => {
    alert("Thank you  ... your order is placed Successfully", {
      position: "top-center",
    });
    dispatch(emptycarts());

    navigate("/");
  };

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const totalValue = () => {
    let sum = 0;
    cartitems.forEach((element) => {
      sum = sum + element.price;
    });
    setTotal(sum);
  };

  useEffect(() => {
    totalValue();
  }, [cartitems]);


  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <>
    <div data-aos="fade-right">
    <div className="container d-flex align-items-center justify-content-center" >
        <h3 className="fw-bold fs-1">
          {" "}
          MY CART{" "}
          <FontAwesomeIcon icon={faBagShopping} className="text-success ms-2" />
        </h3>
      </div>
      <hr />

      <Link to={"/"}>
        <button className="btn btn-dark ms-5 mt-3">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          back to home
        </button>
      </Link>

      {cartitems?.length > 0 ? (
        <div className="container mt-5 ">
          <Row>
            <Col className="border p-3">
              <Table striped hovered bordered>
                <thead>
                  <tr className="text-center">
                    <th>Product image</th>
                    <th>Product title</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {cartitems.map((item) => (
                  <tr className="text-center">
                    <td>
                      <img
                        width={"90"}
                        className="mt-4"
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td className="fw-medium">{item.title.substring(0, 10)}</td>
                    <td className="fw-medium">₹ {item.price}</td>
                    <td className="text-danger">
                      <Button
                        className="btn w-50"
                        onClick={() => dispatch(removefromcart(item.id))}
                        variant="outline-danger "
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </Table>
            </Col>

            <Col>
              <div className="container ms-5 border shadow p-3">
                <div className="text-center">
                  <h3 className="fw-bold text-center text-primary">
                    CART SUMMURY
                  </h3>
                  <hr />
                </div>
                <div className="ps-3 pe-3 ">
                  <h5 className="fw-medium ms-4 mt-5 ">
                    Total Number of Products : <span className="ms-2">9</span>
                  </h5>

                  <h3 className="fw-medium ms-4 mt-4">
                    Total Price :{" "}
                    <span className="ms-2 text-warning fs-2  fw-bolder">
                      ₹ {total}
                    </span>
                  </h3>

                  <button
                    className="btn btn-success w-100 mt-5"
                    onClick={toasttesting}
                  >
                    CHECK OUT
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="d-flex align-items-center mt-5 mb-5 justify-content-center ">
          <img
            className=""
            width={"400px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&s"
            alt=""
          />
        </div>
      )}

      <ToastContainer />
    </div>
      
    </>
  );
}

export default Cart;
