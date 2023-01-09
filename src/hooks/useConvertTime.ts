import { useEffect, useState } from 'react';

export default function useConvertTime(time: number) {
  const [minutes, setMinutes] = useState(time)
  const [seconds, setSeconds] = useState(time)


  useEffect(() => {
    if (typeof (time) === 'number') {
      setMinutes(Math.floor((time / 60)));
      setSeconds(Math.floor((time % 60)));
    }
  }, [time]);

  return `${minutes}:${seconds}`;
}