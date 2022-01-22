import { useEffect, useState } from 'react';

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  // 해당 json data를 브라우저에 출력
  // coins에 data들이 저장
  // useState([]) : 처음 로딩될때 undefined가 되지 않게 하기위해 빈 배열값으로 설정 
  const [coins, setCoins] = useState([]);

  // 빈 array일 경우, 한번만 실행
  useEffect ( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( response => response.json())
    .then( json =>
      setCoins(json));
      setLoading(false);
  }, []);

  return (
    <div>
      <h2>2. The Coin Tracker {loading ? "" : `(${coins.length})`} </h2>
      { loading ? <strong>Loading...</strong> :
        <select>
        {coins.map( (item) => (
          <option>
            {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD
          </option>
        ))}
      </select>
      }
      <hr />
    </div>
  );
};

export default CoinTracker;
