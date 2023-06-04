
export const createFlow = (deviceId, inPort, outPort, inMac, outMac) => {
    return {
        "flows": [
            {
                tableId: "0",
                priority: 200,
                timeout: 0,
                isPermanent: true,
                deviceId: deviceId,
                treatment: {
                    instructions: [
                        {
                            type: "OUTPUT",
                            port: outPort
                        }
                    ],
                    deferred: []
                },
                selector: {
                    criteria: [
                        {
                            type: "IN_PORT",
                            port: inPort
                        },
                        {
                            type: "ETH_DST",
                            mac: outMac
                        },
                        {
                            type: "ETH_SRC",
                            mac: inMac
                        }
                    ]
                }
            },
            {
                tableId: "0",
                priority: 200,
                timeout: 0,
                isPermanent: true,
                deviceId: deviceId,
                treatment: {
                    instructions: [
                        {
                            type: "OUTPUT",
                            port: inPort
                        }
                    ],
                    deferred: []
                },
                selector: {
                    criteria: [
                        {
                            type: "IN_PORT",
                            port: outPort
                        },
                        {
                            type: "ETH_DST",
                            mac: inMac
                        },
                        {
                            type: "ETH_SRC",
                            mac: outMac
                        }
                    ]
                }
            },
        ]
    }
}