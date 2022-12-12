import { useState, useEffect } from 'react';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function useScreenWidth() {
    // If we're not in the browser, return 0
    if (!isBrowser()) {
        return 0;
    }

    // Use the useState hook to store the current screen width in a state variable
    const [width, setWidth] = useState(window.innerWidth);

    // Add an event listener to the window that will update the state variable
    // when the screen width changes
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return width;
}

export default useScreenWidth;
