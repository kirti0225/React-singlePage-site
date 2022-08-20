import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Bar=()=>{
  return (
    <>
      <nav className=" navbar-expand-lg container " style={{borderTop: "2px solid black" }} >
        <div className="Wrapper" style={{marginTop:"7px"}}>
          <div className="Left">
            <div className="Language">
              <p>Shipping and Payment</p>
            </div>
          </div>
          <div className="Right">
            <li className="MenuItem">
              <div className="Badge">
                    <ShoppingCartOutlinedIcon className="bar1" style={{cursor: "pointer"}}/>
                    <div className="dash"></div>
                    <LocalShippingOutlinedIcon className='bar2'style={{cursor: "pointer"}}/>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>

  
  );
};

export default Bar;


