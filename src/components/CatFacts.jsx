
import { useEffect, useState } from 'react';

import styles from './CatFacts.module.css';

import RotatingText from './RotatingText';

// https://reactbits.dev/text-animations/rotating-text

export default function CatFacts() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch("https://catfact.ninja/facts?limit=5");
                if (!response.ok) {
                    throw new Error(`HTTP error. Status ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, []);

    return (
        <>
            <div className={styles.catFactsContainer}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data && (
                    <ul>
                        {data.data.map((fact, i) => (
                            <li key={i}>{fact.fact}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}


