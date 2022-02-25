import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UpDownAlert(props) {

    const [numDownDevices, setNumDownDevices] = useState(0);

    useEffect( () => {
        let counter = 0;
        const subjects = props.devices.map((item) => {
            if(item.isUp === false)
            {
                counter++;
                return false;
            }
            else
            {
                return true;
            }
        });

        setNumDownDevices(counter);

    }, [numDownDevices])

    return (
        <div>
            { (numDownDevices > 0)? 
                <div className='downDevices'>
                    <Link className={'test'} to={'/down'}>
                        <h2><center>{numDownDevices} device(s) down!</center></h2>
                    </Link>
                </div>
            : //No devices down
                <div className='upDevices'>
                    <h2><center>All Devices are Currently Running.</center></h2>
                </div>
            }
        </div>
    )
}

export default UpDownAlert;