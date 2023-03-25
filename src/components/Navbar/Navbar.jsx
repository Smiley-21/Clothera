import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Left */}
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <KeyboardArrowDownIcon />
          </div>

          <div className="women">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="center">
          <div className="item">CLOTHERA</div>
        </div>
        {/* Right */}

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="">
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="">
              Store
            </Link>
          </div>

          <div className="icon">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div
              className="cartIcon"
              onClick={() => {
                setopen(open === true ? false : true);
              }}
            >
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
