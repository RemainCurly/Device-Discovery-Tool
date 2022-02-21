import React, { useState, useEffect } from 'react';

function UpDownAlert(props) {
    
    const [hasDownDevices, setDownDevices] = useState(false);

    useEffect( () => {
        console.log('YES!')
    })

    return (
        <div>
            { (hasDownDevices)? 
                <div>
                    <p>YES!</p>
                </div>
            : //No devices down
                <div>
                    <p>NONE!</p>
                </div>
            }
        </div>
    )
}

export default UpDownAlert;