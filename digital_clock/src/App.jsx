import React, { useState, useEffect } from "react";

const App = () => {
    const [ctime, setCtime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setCtime(new Date().toLocaleTimeString());
        }, 1000); // Update time every second (1000 milliseconds)

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>{ctime}</h1>
        </>
    );
};

export default App;
