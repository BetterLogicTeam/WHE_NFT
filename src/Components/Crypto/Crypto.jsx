import React,{useState,useEffect} from "react";
import "./Crypto.css";
import axios from "axios";

export default function Crypto() {

  const [Users, setUsers] = useState([])
  const [dataapi, setdataapi] = useState([])


  const fetchData = async() => {
    try{
      let getdata= await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")
      console.log("data_chack_here",getdata.data.price);
      
      
      setUsers(getdata.data.price)
    }catch(e){
      console.log("Error While Fetch Api ",e);

    }

  }
  const WheTokenPrice = async() => {

    try{
      let getdata= await axios.get("https://whebuynft.herokuapp.com/wheliverate?id=1")
      console.log("secondapi",getdata.data.data);

      setdataapi(getdata.data.data)
    }catch(e){
      console.log("Error While Fetch Api ",e);
    }
   
    
   
  }

  useEffect(() => {
    fetchData()
    WheTokenPrice()

  }, [])
  
  return (
    <div>
      <div className="crypto">
        <div class="top-crypto-area bg-color-cu section-padding-100-50">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <h6 class="heading-sub mt-3">Cryptocurrencies</h6>
                <h2 class="heading-title mt-3 top mb-5">Top Cryptocurrencies</h2>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4">
                <div class="single-crypto-area d-flex align-items-center">
                  <div class="crypto-icon">
                    <img src="bnb.png" alt="" />
                  </div>

                
                  <div class="crypto-content">
                    <h5>
                      Binance Coin 
                    </h5>
                    <h2>USD {parseFloat(Users).toFixed(3)}</h2>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="single-crypto-area d-flex align-items-center">
                  <div class="crypto-icon">
                    <img src="logo1.png" alt="" />
                  </div>

                  <div class="crypto-content">
                    <h5>
                      WHE 
                    </h5>
                    <h2>USD {parseFloat(dataapi).toFixed(3)}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
