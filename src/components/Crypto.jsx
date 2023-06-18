import React, { useState } from 'react'

const Crypto = ({ crypto, saveDataVal }) => {

    // const[alertC, setAlertC] = useState(true)
    // setTimeout(() => {
    //     alert('Double Click the screen to change Theme')
    //     setAlertC(!alertC)
    // }, 20000);

    const [stat, setStat] = useState([])

    const marketCap = saveDataVal.map((data) => data.market_cap)
    // console.log(marketCap)
    const marketCapValue = marketCap.reduce((acc, sum) => sum + acc).toLocaleString()
    const Vol24 = saveDataVal.map((data) => data.total_volume)
    const Vol24Value = Vol24.reduce((acc, sum) => sum + acc).toLocaleString()
    const PMarketCap = saveDataVal.map((data) => data.market_cap_change_percentage_24h)
    const PMarketCapValue = PMarketCap.reduce((acc, sum) => sum + acc).toLocaleString()

    const marketC = saveDataVal.map(data => data.market_cap);
    // console.log(marketC);
    const redMark = marketC.reduce((acc, sum) => acc + sum).toLocaleString();

    // const Vol242 = saveDataVal.map(data => data.total_volume)
    // const Vol24Values = Vol242.reduce((acc, sum) => sum + acc).toLocaleString()

    const dataP = saveDataVal.map(data => data.market_cap_change_percentage_24h);
    // const PdataValue = dataP.reduce((acc, sum) => acc + sum).toLocaleString()
    // console.log(dataP)

    const downArrow = '\u25BC'
    const upArrow = '\u25B2'

    const cryptoValues = saveDataVal.map((crypto) => (
        <tr key={crypto.id}>
            <td>{crypto.market_cap_rank}</td>
            <td className='img ' style={{ opacity: 1 }} ><img src={crypto.image} alt="logo-image" /><p style={{ fontWeight: 'bolder' }}>{crypto.name}</p></td>
            <td style={{ opacity: .7, fontWeight: 'bolder' }}>{crypto.symbol.toUpperCase()}</td>
            <td>${crypto.current_price.toLocaleString()}</td>
            <td>${crypto.market_cap.toLocaleString()}</td>
            <td>${crypto.circulating_supply.toLocaleString()} {crypto.symbol.toUpperCase()}</td>
            <td style={{ color: 'limegreen', opacity: 1 }}>&#9650;${crypto.high_24h.toLocaleString()}</td>
            <td style={{ color: 'red' }}>&#9660;${`${crypto.low_24h}`}</td>
            <td className={`${crypto.market_cap_change_percentage_24h}`.includes('-') ? 'red' : 'green'}>{`${crypto.market_cap_change_percentage_24h}`.includes('-') ? `${downArrow}${crypto.market_cap_change_percentage_24h}` : `${upArrow}${crypto.market_cap_change_percentage_24h}`}%</td>
            <td className={`${crypto.price_change_percentage_24h}`.includes('-') ? 'red' : 'green'}>{`${crypto.price_change_percentage_24h}`.includes('-') ? `${downArrow}${crypto.price_change_percentage_24h}` : `${upArrow}${crypto.price_change_percentage_24h}`}%</td>
            <td>${crypto.total_volume.toLocaleString()}</td>
        </tr>
    ))

    return (
        <div>
            <h2>Today's CryptoCurrency Prices and Values by Market Cap</h2>
            <div className="crypto-desc">
                <b>CryptoCurrrencies: <span className='desc'>24,000+</span></b>
                <b>Exchanges: <span className='desc'>500+</span></b>
                <b>Total Market Cap: <span className='desc'>${`${redMark.charAt(0)}.${redMark.charAt(2)}${redMark.charAt(4)}T`}</span></b>
                <b>Total Volume(24h)<span className='desc'>: ${`${Vol24Value.charAt(0)}${Vol24Value.charAt(1)}T+`}</span></b>
            </div>

            <div className="today-currency">
                <p style={{ opacity: .77 }}>The Global Market Cap is <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>${redMark.slice(0, 1) + '.' + redMark.charAt(2) + '' + redMark.charAt(4)}T</span> for the last 24 hours. The total Crypto Market Volume percentage over the last 24 hours is <span className={`${PMarketCapValue}`.includes('-') ? 'red' : 'green'}>{`${PMarketCapValue}`.includes('-') ? `${downArrow}${PMarketCapValue}` : `${upArrow}${PMarketCapValue}`}%</span> decrease. </p>
            </div>
            
            <table >
                <thead>
                    <tr >
                        <th className='ranking'>Rankings</th>
                        {/* <th>Logo</th> */}
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>Market Cap</th>
                        <th>Circulating Supply</th>
                        <th>High (24hr)</th>
                        <th>Low (24hr)</th>
                        <th>Market Cap (24hr)%</th>
                        <th>Price Change (24h)%</th>
                        <th>Volume(24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoValues}
                </tbody>
            </table>
        </div>
    )
}

export default Crypto
