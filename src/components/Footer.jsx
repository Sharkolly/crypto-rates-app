import React, { useState } from 'react'

const Footer = () => {
    const time = new Date();
    const hourss = time.getHours()
    const minss = time.getMinutes()
    const secs = time.getSeconds()
    const datess = time.getDate()
    const dayss = time.getDay()
    const monthss = time.getMonth()
    const years = time.getFullYear()



    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [dates, setDates] = useState('')
    setInterval(() => {
        setDates(secs)
    }, 1000);
    return (
        <div>
            <h3>Current Time:<span className="date"> {days[dayss] + ',' + datess + ' ' + months[monthss] + ' ' + years + ' ' + hourss + ':' + minss + ':' + secs}</span></h3>
            <h3 style={{cursor: 'pointer', opacity: .2}}>Double Click the screen to change Theme</h3>
        </div>
    )
}

export default Footer