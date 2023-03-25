import './Product.scss';
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product=()=>{

    const[quantity,setquantity]=useState(1);
    const [curselectedImg,setselectedImg]=useState(0);
    const imgdata=[
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/3ddaa435-7653-4790-bbc0-11304bacb4ea1591857354567-Roadster-Women-Shorts-6171591857352088-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/95fd2ae5-3d16-4f99-9755-65adbdee0c441591857354510-Roadster-Women-Shorts-6171591857352088-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/7e18d4ca-a680-43d4-be46-6f3e60e903c91591857354451-Roadster-Women-Shorts-6171591857352088-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/95fd2ae5-3d16-4f99-9755-65adbdee0c441591857354510-Roadster-Women-Shorts-6171591857352088-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/12/e5eb927e-f7ea-4803-9657-81e307f68aea1591940349525-Roadster-Women-Shorts-3371591940347284-7.jpg",

    ]
    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={imgdata[0]} alt="" onClick={(e)=>{setselectedImg(0)}} />
                    <img src={imgdata[1]} alt="" onClick={(e)=>{setselectedImg(1)}} />
                    <img src={imgdata[2]} alt="" onClick={(e)=>{setselectedImg(2)}} />
                    <img src={imgdata[3]} alt="" onClick={(e)=>{setselectedImg(3)}} />
                </div>
                <div className="mainImg">
                    <img src={imgdata[curselectedImg]} alt="" srcset="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price"> $2999</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa suscipit perferendis animi provident ipsam tempore, fuga aliquid incidunt consectetur sequi?</p>
               <div className="quantity">
                <button className='button' onClick={()=>{setquantity( (prev)=>prev>1?(prev-1):prev)}}>-</button>
                    {quantity}
                <button className='button' onClick={()=>{setquantity((prev)=>(prev+1))}}>+</button>
               </div>

               {/* Cart */}
               <button  className="add">
                <AddShoppingCartIcon/>ADD TO CART
               </button>

               <div className="link">
                <div className="item">
                    <FavoriteBorderIcon/>ADD TO WISHLIST
                </div>
                <div className="item">
                    <BalanceIcon/>ADD TO COMPARE
                </div>
               </div>

               <div className="info">
                <span>Vendor:Polo</span>
                <span>Product Type:T Shirt</span>
                <span>Tag:T-Shirt , Women, Top</span>
               </div>
               <hr/>

               <div className="info">
                <span>DESCRIPTION</span>
                <hr/>
                <span>ADDITIONAL INFORMATION</span>
                <hr/>
                <span>FAQ</span>
               </div>





            </div>
        </div>
    )
}

export default Product;