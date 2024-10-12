import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";

function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <div className="container-fluid homemain mt-3" data-aos="zoom-in">
        <div className="home">
          <div class="card text-bg-dark ">
            <img className="image"
              src="https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg"
              alt=""
            />

            <div class="card-img-overlay ms-4 " style={{ marginTop: "50px" }}>
              <h5
                class="card-title  fw-bold "
                style={{ }}
              >
                CARTIFY: YOUR ULTIMATE SHOPPING CART EXPERIENCE
              </h5>
              <p class="card-text display texting">
                Add your favorite items to the cart and enjoy a seamless
                checkout experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
