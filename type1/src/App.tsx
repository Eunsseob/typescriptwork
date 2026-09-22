import React, {useState} from 'react';
import { Address, Restaurant } from './model/restaurant';
import Store from './Store';
import BestMenu from './model/BestMenu';


let data:Restaurant = {
  name : "김밥천국",
  category : "한식",
  address : {
    city : "서울시",
    detail : "강남구",
    zipcode : "123-456"
  },
  menu : [
    {
      name : "김밥",
      price : 3000,
      category : "한식"
    },
    {
      name : "라면",
      price : 4000,
      category : "한식"
    }
  ]
}

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({
      ...myRestaurant,
      address : address })}

  const showBestMenu = (name:string)=>{
    return name;
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name = "불고기피자" price={20000} showBestMenu={showBestMenu} />
    </div>
  );
}

export default App;
