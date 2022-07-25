import React, { useEffect, useState } from "react";
import "./Header.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { loadWeb3, } from '../../apis/api';
export default function Header() {
  let [btnTxt, setBtTxt] = useState("Connect")

  const getAccount = async () => {
      let acc = await loadWeb3();
      // console.log("ACC=",acc)
      if (acc == "No Wallet") {
          setBtTxt("No Wallet")
      }
      else if (acc == "Wrong Network") {
          setBtTxt("Wrong Network")
      } else {
          let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
          setBtTxt(myAcc);

      }
  }

  useEffect(() => {
      setInterval(() => {
          getAccount();
      }, 1000);
  }, []);
  return (
    <div>
      <div className="maina">
        <Navbar
          className="Headera"
          collapseOnSelect
          expand="xl"
          bg="black"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className="pic">
              <img src="logo1.png" alt="" width="50%" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
         
                <Nav className="ms-auto nav_in_responsive ">
                  <Nav.Link className="hzn" >
                     <Link to="/" className="link_text" >Home</Link>
                  </Nav.Link>

                  <Nav.Link className="hzn">
                    <Link to="/About_main" className="link_text" >About</Link>
                  </Nav.Link>

                  <Nav.Link className="hzn" href="#collection">
                    <Link to="/Collection_main" className="link_text" >Collection</Link>
                  </Nav.Link>
                  <Nav.Link className="hzn" href="#benefits">
                     <Link to="/Benefits_main" className="link_text" >Benefits</Link>
                  </Nav.Link>
                  <Nav.Link className="hzn" href="#roadmap">
                     <Link to="/Road_main" className="link_text" >Roadmap</Link>
                  </Nav.Link>

                  {/* <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">Mint</button></Link> */}
                  <div class="dropdown ms-2 ">
                  <button
                    class="btn btn-secondary dropdown-toggle select_main"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mint
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >

                    <li>
                      <a class="dropdown-item">
                       
                        <Link to="Mint_main" className="text_style">
                         
                          
                          Mint With 100 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                       
                        <Link to="Mint_wirh_500" className="text_style">
                         
                          
                          Mint With 500 USD
                        </Link>
                      </a>
                    </li>
                    {/* <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_200" className="text-d">
                          {" "}
                          
                          Mint With 200 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_300" className="text-d">
                          {" "}
                          
                          Mint With 300 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_400" className="text-d">
                          {" "}
                          
                          Mint With 400 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_500" className="text-d">
                          {" "}
                          
                          Mint With 500 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_1000" className="text-d">
                          {" "}
                          
                          Mint With 1000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_2000" className="text-d">
                          {" "}
                          
                          Mint With 2000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_3000" className="text-d">
                          {" "}
                          
                          Mint With 3000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_4000" className="text-d">
                          {" "}
                          
                          Mint With 4000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_5000" className="text-d">
                          {" "}
                          
                          Mint With 5000 USD
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        {" "}
                        <Link to="Mint_With_10000" className="text-d">
                          {" "}
                          
                          Mint With 10000 USD
                        </Link>
                      </a>
                    </li> */}
                    {/* <li>
                      <a class="dropdown-item">
                        <Link to="/Main_polygon" className="text-d">
                          {" "}
                          <img src="polygon.png" alt="" /> Polygon
                        </Link>
                      </a>
                    </li> */}
                  </ul>
                </div>
                  <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">{btnTxt}</button></Link>
                    
                  
                </Nav>
          
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
