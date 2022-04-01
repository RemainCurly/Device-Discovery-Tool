//Possible deviceTypes: Endpoint, Server, Access-Points,
//                      IoT (cameras), Firewalls, Switches,
//                      Routers, Phones, Unknown

const deviceTester = [
    {
        deviceType: 'Endpoint',
        isUp: true,
    },
    {
        deviceType: 'Server',
        isUp: true,
    },
    {
        deviceType: 'Access-Points',
        isUp: false,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'Firewalls',
        isUp: true,
    },
    {
        deviceType: 'Switches',
        isUp: true,
    },
    {
        deviceType: 'Routers',
        isUp: true,
    },
    {
        deviceType: 'Phones',
        isUp: true,
    },
    {
        deviceType: 'Unknown',
        isUp: true,
    },
    {
        deviceType: 'Endpoint',
        isUp: false,
    },
    {
        deviceType: 'Server',
        isUp: false,
    },
    {
        deviceType: 'Access-Points',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: false,
    },
    {
        deviceType: 'Firewalls',
        isUp: false,
    },
    {
        deviceType: 'Switches',
        isUp: false,
    },
    {
        deviceType: 'Routers',
        isUp: false,
    },
    {
        deviceType: 'Phones',
        isUp: false,
    },
    {
        deviceType: 'Unknown',
        isUp: false,
    },
];

const manyUpSomeDown = [
    {
        deviceType: 'Endpoint',
        isUp: true,
    },
    {
        deviceType: 'Phones',
        isUp: true,
    },
    {
        deviceType: 'Unknown',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'Unknown',
        isUp: false,
    }
]

const numberRatios = [
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'Phones',
        isUp: false,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    }
]

const manyUp = [
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: true,
    },
    {
        deviceType: 'IoT/Cameras',
        isUp: false,
    },
]

export { deviceTester, manyUpSomeDown, numberRatios, manyUp };