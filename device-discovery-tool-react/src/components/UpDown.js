import React, { useState, useEffect } from 'react';

function UpDownAlert(props) {
    
    const [hasDownDevices, setDownDevices] = useState(false);
    const [numDownDevices, setNumDownDevices] = useState(0);

    useEffect( () => {
        const subjects = props.devices.map((item) => {
            if(item.isUp === false)
            {
                setNumDownDevices(numDownDevices + 1);
                return true;
            }
            else
            {
                setNumDownDevices(numDownDevices);
            }
        });

        console.log(subjects);

        if(subjects.includes(true))
            setDownDevices(true)
        else
            setDownDevices(false)
    }, [])

    return (
        <div>
            { (numDownDevices > 0)? 
                <div className='downDevices'>
                    <h2><center>{numDownDevices} device(s) down!</center></h2>
                </div>
            : //No devices down
                <div className='upDevices'>
                    <h2><center>Nope! All clear!</center></h2>
                </div>
            }
        </div>
    )
}

export default UpDownAlert;