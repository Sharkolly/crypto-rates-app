import { useEffect, useState } from "react";
import "./App.css";
import crypto from './crypto.json'
import CountryCode from "./components/CountryCode";
import Crypto from "./components/Crypto";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {

  const [color, setColor] = useState(true);
  const [checkWidth, setCheckWidth] = useState(true);
  const [save, setSave] = useState('');

  const [saveDataVal, setSaveDataVal] = useState([])
  const [saveDataValu, setSaveDataValu] = useState([])


  const [widthh,setWidthh] = useState('')


  // const url = 'https://open.er-api.com/v6/latest/NGN'

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const fetchData = async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setSaveDataVal(response)

    }
    catch (err) {
      console.log(err.message)
    }
    // console.log(saveDataVal)
  }

  useEffect(() => {
    setWidthh(window.innerWidth);
    fetchData();
    setInterval(() => {
      fetchData();
    }, 5000);
  },[url])

  const time = new Date();
  const hours = time.getHours()
  const date = time.getDate()
  const month = time.getMonth()
  const [timeCondition, setTimeCondition] = useState('')

  const check = hours >= 0 && hours <= 11 ? 'Good-Morning' : hours >= 12 && hours <= 15 ? 'Good-Afternoon' : 'Good-Evening'
  const period = date == 25 && month == 11 ? 'Merry-Christmas!!!' : date == 1 && month == 0 ? 'Happy New Year!!!' : ''

  return (
    <div className="App" onDoubleClick={() => setColor(!color)} style={color ? { background: 'rgb(233, 233, 233)', color: 'black' } : { background: 'rgb(22, 22, 22)', color: 'white' }}>

      {widthh >= 1101 ? <div className="container">
        <div className="header">
          <h1 className={check == 'Good-Morning' ? 'morning' : check == 'Good-Afternoon' ? 'afternoon' : 'evening'} >{check}...</h1>
          <h1 style={{ color: 'limegreen' }}>{period}</h1>
        </div>


        <Crypto crypto={crypto} saveDataVal={saveDataVal} />


        <Footer />      </div> : <Container/>}

    </div>
  );
}

export default App;
