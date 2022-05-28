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

                  <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">Mint</button></Link>
                  <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">{btnTxt}</button></Link>
                    
                  
                </Nav>
          
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
