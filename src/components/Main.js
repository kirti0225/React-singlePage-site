import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Main = () => {
  return (
    <div className="container1">
      <div className="wrapper">
        <div className="left2">
          <div className="buttons">
            <button className="btn">SIGN IN</button>
            <button className="btn">SIGN UP</button>
          </div>
          <div className="details">
            <p>Shipping Information</p>
          </div>
          <div className="forms">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="EMAIL"/>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="ADDRESS"/>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="FIRST NAME" />
            <input type="text" id="fname" name="firstname" placeholder="CITY" />
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="LAST NAME"/>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="POSTAL CODE/ZIP"/>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="PHONE NUMBER"/>
            <select id="country" name="country">
              <option value="australia">India</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="center2">
          <div className="title2">
            <p>Payment method</p>
          </div>
          <div className="logo2">
            <div className="pay">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WCZnQ8BvPz8y16Y6xkQZHsYnVydc_RhaIw&usqp=CAU" />
            </div>
            <div className="pay">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkMK4ZSPet87S-cargJWFycScDhmXr8tRAw&usqp=CAU" />
            </div>
            <div className="pay">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXNJ9Wc5Cuq3PjUFjp-kq7JbZLNIysl5VkQ&usqp=CAU" />
            </div>
            <div className="pay">
              <img src="https://lh3.googleusercontent.com/cL0-sGY6d5KaZFLOYuM_Q7-jjtBMa4kWFH63P_SkulwLOeJ0RlsPSIFreR6K6np2n_Q_JSiZbSYmwGteTPNQ6M07II1bo_S6HJ4yFkE=s0" />
            </div>
            <div className="pay">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23iYr7IfryWRP7nYkNHEokmh1a1MwGAMxIw&usqp=CAU" />
            </div>
            <div className="pay">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFtHkg4tPZs9R-lrtxZgEuDVTHtZKkvNCAg&usqp=CAU" />
            </div>
          </div>
          <div className="title2">
            <p>Payment method</p>
          </div>
          <div className="logo3">
            <div className="pay1">
              <img src="https://thumbs.dreamstime.com/b/logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-paper-texture-glossy-emblem-wallpaper-210441898.jpg" />
              $20.00
            </div>
            <div className="pay1">
              <img src="https://1000logos.net/wp-content/uploads/2020/09/Logo-DPD.jpg" />
              $12.00
            </div>
            <div className="pay1">
              <img src="https://previews.123rf.com/images/oliviart/oliviart2006/oliviart200600121/149000564-delivery-icon-isolated-on-white-background-fast-delivery-icon-fast-shipping-delivery-truck-truck-ico.jpg" />
              $10.00
            </div>
            <div className="pay1">
              <img src="https://cdn.iconscout.com/icon/free/png-256/dhl-express-3442895-2875356.png" />
              $15.00
            </div>
          </div>
        </div>
        <div className="right2">
          <div className="title3">
            <p>Your cart</p>
          </div>
          <div className="items">
            <div className="summaryItem">
              <img
                className="img1"
                src="https://rukminim1.flixcart.com/image/714/857/khcb7gw0/shirt/g/t/v/l-ifc-pl-34-icon-fashion-club-original-imafxdzp9nydqaqz.jpeg?q=50"
              />
              <div className="Tleft">
                Shirt <span>Summer Vibes</span>{" "}
              </div>
              <div className="Tright">$89.99</div>
            </div>
            <div className="summaryItem">
              <img
                className="img1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhFElQ0_IwdGWphT8qhd-reqvP8THiI0HHQ&usqp=CAU"
              />
              <div className="Tleft">
                Basic Slim<span>Fit T-Shirt</span>
              </div>
              <div className="Tright">$89.99</div>
            </div>
            <div className="totalbtn">
              <button className="btn1">
                Total cost: <span>$159,98</span>{" "}
              </button>
            </div>
          </div>
          <div className="cartSummary">
            <LocalShippingOutlinedIcon className="logo" />
            <div className="logo" style={{ fontSize: "15px", color: "gray" }}>
              {" "}
              You are $30,02 away <br />
              from free shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
