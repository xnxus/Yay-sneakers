import Card from './components/Card';
import Header from './components/Header.js';
import Drawer from './components/Drawer.js';
import React, {useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() =>{
    fetch('https://64a7e8d7dca581464b84fbcd.mockapi.io/items')
      .then((res) => {
      return res.json();
      })
      .then((json) =>{
        setItems(json);
      });
  }, []);

  const onAddToCard = (obj) => {
    setCartItems([...cartItems, obj]); 
  };
  
  return (
    <div className="overlay"> 
    <div className = "wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)} /> 
      }
      <Header onClickCart= {() => setCartOpened(true)} /> 
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Search..." />
          </div>
        </div>
    
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card 
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={()=> console.log('Add bookmarks')}
            onPlus= {(obj) => onAddToCard(obj)} 
            />
          ))}
          </div>
        </div>
      </div>
    </div>
    );
}

export default App;