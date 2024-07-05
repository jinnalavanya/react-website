import React from "react";
import banner1 from "./assets/DESK1-min.jpg";
import banner2 from "./assets/desk2-min.jpg";
import banner3 from "./assets/desk3-min.jpg";
import About from "./About";

function Slider() {
  return (
    <div>
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Third slide"
          ></li>
        </div>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src={banner1} class="w-100 d-block" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img src={banner2} class="w-100 d-block" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img src={banner3} class="w-100 d-block" alt="Third slide" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselId"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <About />
    </div>
  );
}

export default Slider;
