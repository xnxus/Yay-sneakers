function Drawer({ onClose, items = [] }) {
    return(
        <div className="drawer">
          <h2 className="d-flex justify-between mb-40">
            Trash 
            <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close"></img></h2>
          <div className="items">
          {items.map((obj) =>(
            <div className="cartItem d-flex align-center mb-20">
            <div 
            style={{backgroundImage: `url(${obj.imageUrl})` }} 
            className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"></img>
          </div>
          ))}
       </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Result</span>
                <div></div>
                <b>7240</b>
              </li>
              <li>
                <span>Tax 5%</span>
                <div></div>
                <b>362</b>
              </li>
            </ul>
            <button className="greenButton">Order <img src="/img/arrow.svg" alt="Arrow"></img></button>
          </div>
        </div>
    )
}

export default Drawer;