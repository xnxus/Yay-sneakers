function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={80} height={80} src="/img/logo.png" alt="Logo"></img>
          <div>
            <h3 className="text-uppercase">Yay Sneakers</h3>
            <p className="opacity-5">Find smth for you</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
            <img width={18} height={18} src="/img/drawer.png" alt="Drawer"></img>
            <span>3400 uah</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.png" alt="Profile"></img>
          </li>
        </ul>
      </header> 
    )
}

export default Header;