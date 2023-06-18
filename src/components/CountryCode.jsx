import React, { useState } from 'react'

const CountryCode = ({ currency }) => {
    const mapCurrencyCountry = Object.keys(currency.rates).map((rates) => (
        <option value={rates} key={rates} > {rates}</option >

    )
    )

    const [values, setValues] = useState('')
    // console.log(values)

    // const currencyVal = Object.values(currency.rates).map((rates) =>)
    // console.log(mapCurrencyCountry)

    return (
        <div className=''>
            <h2 className="center">{ }</h2>

            <div className="currency">
                <div className="from">
                    <p className='from'>From</p>
                    <select name="" id="" onChange={(e) => setSave(e.target.value)} >
                        {mapCurrencyCountry}
                    </select>
                </div>
                <div className="from">
                    <input type="number" name="" id="" onChange={(e) => setValues(e.target.value)} />
                </div>
                <div className="from">
                    <p className='from'>Convert To</p>
                    <select name="" id="" onChange={(e) => setSave(e.target.value)} >
                        {mapCurrencyCountry}
                    </select>
                </div>
            </div>

            <button>Convert</button>

        </div>
    )
}

export default CountryCode