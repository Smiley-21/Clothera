import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/3ddaa435-7653-4790-bbc0-11304bacb4ea1591857354567-Roadster-Women-Shorts-6171591857352088-1.jpg",
      img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/95fd2ae5-3d16-4f99-9755-65adbdee0c441591857354510-Roadster-Women-Shorts-6171591857352088-2.jpg",
      title: "Women's Westernwear",
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, magni",
      oldPrice: 2400,
      price: 1800,
      isnew: true,
    },
    {
      id: 2,
      img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Menswestern-Starting299.jpg",
      title: "Men's Westernwear",
      oldPrice: 1600,
      desc:" Soluta voluptatem laborum fugit repudiandae inventore enim quae ratione porro doloremque voluptas",
      price: 1400,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in the Cart</h1>
      {data?.map((p) => (
        <div className="item" key={p.id}>
          <img src={p.img} alt="" />
          <div className="detail">
            <h1>{p.title}</h1>
            <p>{p.desc?.substring(0, 40)}</p>
            <div className="price">1 x ${p.price}</div>
          </div>
          <DeleteOutlineIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className="checkout">PROCEED TO CHECKOUT</button>
      <span className="reset">Reset the Cart</span>
    

      
    </div>
  );
};

export default Cart;
