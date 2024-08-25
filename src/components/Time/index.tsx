import { useEffect, useRef, useState } from 'react';

function Time() {
    const [myTime, setMyTime] = useState(0);
    const intervalRef = useRef<number>();

    // useEffect(() => {
    //     clearInterval(intervalRef.current);
    //     intervalRef.current = setInterval(() => {
    //         setMyTime(myTime + 1);
    //     }, 1000);
    // }, [myTime]);

    console.log('re-render MyTime');
    return <section>My own time! 😎 {myTime}</section>;
}

export default Time;
