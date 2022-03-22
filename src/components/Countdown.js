import { useEffect, useRef, useState } from "react";

const Countdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMins, setTimerMins] = useState('00');
    const [timerSecs, setTimerSecs] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const cdDate = new Date('March 29, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const gap = cdDate - now;

            const days = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hours = Math.floor((gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const mins = Math.floor((gap % (1000 * 60 * 60) / (1000 * 60)));
            const secs = Math.floor((gap % (1000 * 60) / 1000));

            if (gap < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMins(mins);
                setTimerSecs(secs);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(interval.current);
    }, []);

    return (
        <div className='flex gap-2 md:gap-6'>
            <div className='flex flex-col items-center py-2 justify-center w-full md:w-36 md:h-36 bg-[white] rounded-xl shadow-xl'>
                <h1 className='text-2xl md:text-6xl'>{timerDays}</h1>
                <p className='text-[rgba(0,0,0,0.6)] text-sm'>Days</p>
            </div>
            <div className='flex flex-col items-center py-2 justify-center w-full md:w-36 md:h-36 bg-[white] rounded-xl shadow-xl'>
                <h1 className='text-2xl md:text-6xl'>{timerHours}</h1>
                <p className='text-[rgba(0,0,0,0.6)] text-sm'>Hours</p>
            </div>
            <div className='flex flex-col items-center py-2 justify-center w-full md:w-36 md:h-36 bg-[white] rounded-xl shadow-xl'>
                <h1 className='text-2xl md:text-6xl'>{timerMins}</h1>
                <p className='text-[rgba(0,0,0,0.6)] text-sm'>Minutes</p>
            </div>
            <div className='flex flex-col items-center py-2 justify-center w-full md:w-36 md:h-36 bg-[white] rounded-xl shadow-xl'>
                <h1 className='text-2xl md:text-6xl'>{timerSecs}</h1>
                <p className='text-[rgba(0,0,0,0.6)] text-sm'>Seconds</p>
            </div>
        </div>
    );
};

export default Countdown;