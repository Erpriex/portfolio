import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/WaveEmoji.module.scss';

const WaveEmoji = () => {
    const [isWaving, setIsWaving] = useState(false);
    const timerRef = useRef(null);

    const triggerWave = () => {
        setIsWaving(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setIsWaving(false);
        }, 1200);
    };

    useEffect(() => {
        const initialDelay = setTimeout(triggerWave, 1000);

        const interval = setInterval(triggerWave, 5000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);

    const handleClick = () => {
        if(!isWaving) {
            triggerWave();
        }
    };

    return (
        <span
            className={`${styles.wave} ${isWaving ? styles.waveActive : ''}`}
            onClick={handleClick}
            role="img"
            aria-label="waving hand"
        >
      👋
    </span>
    );
};

export default WaveEmoji;
