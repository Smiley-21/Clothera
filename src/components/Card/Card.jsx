import './Card.scss'
import {Link} from 'react-router-dom';

const Card=({item})=>{

    return (
          <Link to={`/product/${item.id}`}  className="link">
          <div className="card">
            <div className="image">
                {item.isnew && <span>New Season</span>}
                <img src={item.img} alt="" className="mainImag" />
                <img src={item.img2} alt="" className="secondImag" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>

          </div>
          </Link>
    )
}

export default Card;