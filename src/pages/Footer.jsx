import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import instaLogo from "../assets/instaLogo.png";
function Footer() {
  return (
    <>
      <hr className="mt-5" />

      <div className="container ">
        <Row>
          <Col>
            <div className="footerheading ">
              <Link className="headerlinks">
                <h2 className="fw-bolder fs-1  ms-3 mt-5   ">E CART</h2>
                <h5 className="fw-bold  ms-3 ">APPLICATION</h5>
              </Link>
            </div>
          </Col>
          <Col className="mt-5">
            <Link
              to={"/home"}
              style={{ textDecoration: "none" }}
              className="text-dark"
            >
              <h5>home</h5>
            </Link>
            <Link
              to={"/products"}
              style={{ textDecoration: "none" }}
              className="text-dark"
            >
              <h5>products</h5>
            </Link>
            <Link style={{ textDecoration: "none" }} className="text-dark">
              <h5>carts</h5>
            </Link>
            <Link style={{ textDecoration: "none" }} className="text-dark">
              <h5>wishlist</h5>
            </Link>
          </Col>

          <Col className="mt-5 ">
            <div className="d-flex mt-4">
              <input
                type="text"
                className="form-control w-50"
                placeholder="ENTER A MESSAGE"
              />
              <button className="btn btn-dark ms-5">SEND</button>
            </div>

            <div className="d-flex mt-4 ms-5">
              <Link>
                <FontAwesomeIcon
                  className="fs-2"
                  style={{ color: "#0866ff" }}
                  icon={faFacebook}
                />
              </Link>
              <Link>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="fs-2 ms-2"
                  style={{ color: "#ff0000" }}
                />
              </Link>
              <Link>
                <img src={instaLogo} width={"60px"} alt="" />
              </Link>
              <Link>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="fs-2  text-dark"
                />
              </Link>
              <Link>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fs-2 ms-2 text-primary"
                />
              </Link>
              <Link>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fs-2 ms-2 text-dark"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
