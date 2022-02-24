import React, { useState, useEffect } from 'react';

function UpDownAlert(props) {
    
    const [hasDownDevices, setDownDevices] = useState(false);

    useEffect( () => {
        if(props.Status === false)
            setDownDevices(true)
        else
            setDownDevices(false)
    })

    return (
        <div>
            { (hasDownDevices)? 
                <div className='downDevices'>
                    <p>YES!</p>
                </div>
            : //No devices down
                <div className='upDevices'>
                    <p>NONE!</p>
                </div>
            }
        </div>
    )
}

export default UpDownAlert;