import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Navbar=()=>{
  return (
    <>
      <nav className=" navbar-expand-lg container " >
        <div className="Wrapper">
          <div className="Left">
            <div className="Language">
              <StorefrontIcon className="logo"/>
              <div className="logo"><span style={{color:"yellow"}}>E-</span>Shop</div>
            </div>
          </div>
          <div className="Center">
            <div className="cat">
              <h3>Men</h3>
              <h3>Women</h3>
              <h3>Kids</h3>
            </div>
          </div>
          <div className="Right">
            <li className="MenuItem">
              <div className="Badge">
                {/* <i className="fa-solid fa-envelope-dot"></i> */}
                <SearchIcon className="icon" style={{cursor: "pointer"}}/>
                <ShoppingCartOutlinedIcon className="icon" style={{cursor: "pointer"}}/>
                <PermIdentityIcon className="icon" style={{cursor: "pointer"}}/>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>

  
  );
};

export default Navbar;


