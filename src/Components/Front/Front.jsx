import React from "react";
import "./Front.css";


// import "./styles.css";
import { EffectFlip, Pagination, Navigation } from "swiper";
export default function Front() {

  return (
    <div>
      <div className="first">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h1 className="head">Welcome To <span> WHE NFT</span></h1>
              <p className="head2">
                An exclusive private-members club by Swap. Swap NFTs in a decentralized environment, with an escrow mechanism facilitating swaps between users. On WHE NFT, every swap is resolved to the full satisfaction of participants.

              </p>
              <p className="head2">A private and unique collection of 10000 NFT, which act as a membership for the WHE Club. WHE is next-generation decentralized NFT platform for all types of marketplaces catering to the growing world of digital artists, creators, and collectors. WHE NFT wants to be the first truly community-run marketplace and believes that the diversity will make it an eccentric and truly one-of-a-kind project in the world</p>
            </div>
            <div className="col-md-1 col-12"></div>
            <div className="col-md-5 col-12 ">

              <section class="three-d-container">
                <input type="radio" checked class="three-d-bullet a" name="three-d"/>
                  <input type="radio" class="three-d-bullet b" name="three-d"/>
                    <input type="radio" class="three-d-bullet c" name="three-d"/>
                      <input type="radio" class="three-d-bullet d" name="three-d"/>
                        <input type="radio" class="three-d-bullet e" name="three-d"/>
                          <input type="radio" class="three-d-bullet f" name="three-d"/>
                            <div class="three-d-cube">
                              <figure class="three-d-item">
                                <img src="39.png" alt=""/>
                              </figure>
                              <figure class="three-d-item">
                                <img src="1847.png" alt=""/>
                              </figure>
                              <figure class="three-d-item">
                                <img src="73.png" alt=""/>
                              </figure>
                              <figure class="three-d-item">
                                <img src="231.png" alt=""/>
                              </figure>
                              <figure class="three-d-item">
                                <img src="1847.png" alt=""/>
                              </figure>
                              <figure class="three-d-item">
                                <img src="1140.png" alt=""/>
                              </figure>
                            
                            </div>
                          </section>

                          {/* <div className="swiper swiperhere mySwiper2 slider_3d_main">
                <div className="swiper-wrapper text-center">
                  <div className="swiper-slide silderonertwo">
                    <img src="39.png" alt="" />
                  </div>
                  <div className="swiper-slide silderonertwo">
                    <img src="1847.png" alt="" />
                  </div>
                  <div className="swiper-slide silderonertwo">
                    <img src="73.png" alt="" />
                  </div>
                  <div className="swiper-slide silderonertwo">
                    <img src="231.png" alt="" />
                  </div>
                </div>
                <div className="swiper-pagination "></div>
              </div> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
}
