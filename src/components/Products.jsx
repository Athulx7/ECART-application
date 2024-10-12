import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./product.css";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoWishlist } from "../redux/wishlistslice";
import { addtocart } from "../redux/cartslice";
import { toast, ToastContainer } from "react-toastify";
import Aos from "aos";

function Products() {
  const responce = useFetch("https://fakestoreapi.com/products");
  const [filter, setfilter] = useState(responce);
  const [seach, setSearchterm] = useState("");

  const getfilters = (x) => {
    const filterdata = responce.filter((item) => item.category === x);
    setfilter(filterdata);

    const value = x.target.value;
    setSearchterm(value);

    const filtered = responce.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setfilter(filtered);
  };

  useEffect(() => {
    setfilter(responce);
  }, []);

  const dispatch = useDispatch();


   useEffect(()=>{
    Aos.init({duration:2000})
   })
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="producthead d-felx justify-content-center align-items-center">
          <h3 className="text-center fw-bolder fs-1 mt-5 " data-aos="zoom-in">PRODUCTS</h3>
          <hr />
        </div>

        <div className="search d-flex justify-content-center align-items-center w-50 ms-auto me-auto mt-5">
          <input
           
            onChange={getfilters}
            type="text"
            name=""
            id=""
            className="form-control text-center fw-bold "
            width={"100px"}
            placeholder="SEACRH ITEM BY NAME"
          />
        </div>

        <div className="filterbuttons d-flex justify-content-center align-items-center mt-4">
          <button className="btn btn-dark" onClick={() => setfilter(responce)}>
            ALL
          </button>
          <button
            className="btn btn-dark ms-4"
            onClick={() => getfilters("men's clothing")}
          >
            MEN'S
          </button>
          <button
            className="btn btn-dark ms-4"
            onClick={() => getfilters("women's clothing")}
          >
            WOMEN'S
          </button>
          <button
            className="btn btn-dark ms-4"
            onClick={() => getfilters("jewelery")}
          >
            JWEWLERY ITEMS
          </button>
        </div>

        <div className=" produt-listing mt-5 ">
          {filter?.length > 0
            ? filter?.map((item) => (
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
                          onClick={() => dispatch(addtocart(item))}
                          className="me-5 "
                        >
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => dispatch(addtoWishlist(item))}
                          className="ms-5"
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : responce?.map((item) => (
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
                          onClick={() => dispatch(addtocart(item))}
                          className="me-5 "
                        >
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => dispatch(addtoWishlist(item))}
                          className="ms-5"
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Products;
