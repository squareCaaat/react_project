import Button from "./button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState("");
  const [gcoin, setGcoin] = useState(0);
  const onChange = (event) => {
    setAmount(event.target.value);
    setGcoin(0);
    if(amount > 0){
      console.log("amount is greater than 0");
      coins.some((coin)=>{
        if(selected === coin.symbol){
          setGcoin(amount/Math.round(coin.quotes.USD.price));
          console.log(gcoin);
          return true;
        }
      });
    }
  };
  const onSelect = (event) => {
    setSelected(event.target.value);
  };
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response=>response.json())
    .then(data=>{
      setCoins(data);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1>The Coins {loading? "" : `(${coins.length})`}</h1>
      {loading? <strong>Loading...</strong>:
        <div>
          <input value={amount} onChange={onChange} type="number" placeholder="Input your budget" /> $ <br/>
          <select value={selected} onChange={onSelect}>
            {coins.map((coin)=>{
              return (
                <option key={coin.id} value={coin.symbol}>
                  {coin.name} ({coin.symbol})
                </option>
              );
            })}
          </select>
          <h3>
            You Can Get {gcoin} of 
              {coins.some((coin)=>{
                if(coin.symbol === selected){
                  console.log(selected, "updated!");
                  return (<span>{coin.name} ({coin.symbol})</span>);
                }
              })}
          </h3>
        </div>
      }
    </div>
  );
}

export default App;
