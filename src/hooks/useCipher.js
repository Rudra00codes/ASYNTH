import { useEffect, useState, useRef } from 'react';

// Hook replicating original cipher scramble on hover
export const useCipher = (text) => {
  const [displayText, setDisplayText] = useState(text);
  const original = useRef(text);
  const activeRef = useRef(false);

  useEffect(() => { original.current = text; setDisplayText(text); }, [text]);

  const scramble = () => {
    if (activeRef.current) return;
    activeRef.current = true;
    const solveMs = 500;
    const charSelMs = 40;
    const delayMs = 250;
    const chars = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^'];
    const origArr = [...original.current];
    let delay = 0;
    origArr.forEach((_, index) => {
      setTimeout(() => {
        let intervalId = setInterval(() => {
          setDisplayText((prev) => {
            const arr = [...prev];
            arr[index] = chars[(chars.length * Math.random()) | 0];
            return arr.join('');
          });
        }, charSelMs);
        setTimeout(() => {
          clearInterval(intervalId);
            setDisplayText((prev) => {
              const arr = [...prev];
              arr[index] = origArr[index];
              return arr.join('');
            });
          if (index === origArr.length - 1) {
            setTimeout(() => { activeRef.current = false; }, solveMs);
          }
        }, solveMs);
      }, delay === 0 ? (delay += 1) : (delay += delayMs));
    });
  };

  return { displayText, scramble };
};
