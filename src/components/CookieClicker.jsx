
import { useState, useEffect } from 'react'
import styles from './CookieClicker.module.css';

import Counter from './Counter.jsx';

export default function CookieClicker() {

    const [count, setCount] = useState(0);
    const [autoClickers, setAutoClickers] = useState(0);

    function handleCount() {
        setCount(prev => prev + 1);
    }

    function buyAutoclicker() {
        const cost = 50;

        if (count >= cost) {
            setCount(prev => prev - cost);
            setAutoClickers(prev => prev + 1);
        } else {
            alert(`You need ${cost} cookies!`);
        }
    }

    
    useEffect(() => {
        if (autoClickers === 0) return;

        const interval = setInterval(() => {
            setCount(prev => prev + autoClickers);
        }, 1000);

        return () => clearInterval(interval);
    }, [autoClickers]);
    

    return (
        <div className={styles.cookieContainer}>
            <Counter
                value={count}
                places={[100, 10, 1]}
                fontSize={80}
                padding={5}
                gap={10}
                textColor="white"
                fontWeight={900}
            />
            <h1>Cookies</h1>
            <p>{autoClickers} Auto Clickers</p>
            <button className={styles.cookieImg} onClick={handleCount}><img src="cookie.png" alt="Image of a Cookie"/></button>
            <button className={styles.buyBtn} onClick={buyAutoclicker}>Buy Autoclicker</button>
        </div>
    )
}