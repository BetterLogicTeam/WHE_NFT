import React, { useEffect } from "react";
import $ from "jquery";
import "slick-slider";
import "./Slide.css";

function Slide() {
  useEffect(() => {
    $(document).ready(function () {
      $(".slider").slick({
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 5,
        slidesToScroll: 1,
        // dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  }, [$]);
  return (
    <div>
      <div className="explore-area bg-color-cu section-padding-100-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h6 className="heading-sub">New Explore</h6>
              <h2 className="heading-title">Explore All</h2>
            </div>

            <div className="slickSliderContainer">
              <div className="slider">
                <div>
                  <img src="289.png" className="sliderimgall" />
                </div>
                <div>
                  <img src="166.png" className="sliderimgall" />
                </div>
                <div>
                  <img className="sliderimgall" src="1140.png" />
                </div>
                <div>
                  <img className="sliderimgall" src="90.png" />
                </div>
                <div>
                  <img className="sliderimgall" src="275.png" />
                </div>
                <div>
                  <img className="sliderimgall" src="2132.png" />
                </div>
                <div>
                  <img className="sliderimgall" src="99.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* <div class="explore-area bg-color-cu section-padding-100-50">
        <div class="container-fluid">
          <div class="row">

            <div class="col-12 text-center">
              <h6 class="heading-sub">New Explore</h6>
              <h2 class="heading-title">Explore All</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="swiper mySwiper">
                <div class="swiper-wrapper">

                  <div class="swiper-slide">
                    <img src="289.png" alt="Image" />
                  </div>


                  <div class="swiper-slide">
                    <img src="166.png" alt="Image" />
                  </div>


                  <div class="swiper-slide">
                    <img src="1140.png" alt="Image" />
                  </div>


                  <div class="swiper-slide">
                    <img src="90.png" alt="Image" />
                  </div>


                  <div class="swiper-slide">
                    <img src="275.png" alt="Image" />
                  </div>

                

                </div>
                <div class="swiper-pagination"></div>
              </div>

            </div>

          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Slide;
