import { useState, useEffect } from 'react'

const Header = () => {
    let getFormattedTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}시 ${minutes}분`
    }

    const [time, setTime] = useState(getFormattedTime());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(getFormattedTime());

            return () => clearInterval(interval);
        },1000)
    },[])
  return (
    <header id='header'>
        <div className="container">
            <h1>오때요</h1>
            <p>현재 시각은 {time} 입니다</p>
        </div>
    </header>
  )
}

export default Header