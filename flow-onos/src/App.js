import React, { useState } from 'react';
import { createFlow } from './utils/createFlow';

function App() {
  const [deviceId, setDeviceId] = useState('');
  const [inPort, setInPort] = useState('');
  const [outPort, setOutPort] = useState('');
  const [mac1, setMac1] = useState('');
  const [mac2, setMac2] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const flow = createFlow(deviceId, inPort, outPort, mac1, mac2);
    console.log(JSON.stringify(flow));
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          value={deviceId}
          id='device'
          type='text'
          onChange={(e) => setDeviceId(e.target.value)}
        />
        <input
          value={inPort}
          id='inport'
          type='text'
          onChange={(e) => setInPort(e.target.value)}
        />
        <input
          value={outPort}
          id='outport'
          type='text'
          onChange={(e) => setOutPort(e.target.value)}
        />
        <input
          value={mac1}
          id='mac1'
          type='text'
          onChange={(e) => setMac1(e.target.value)}
        />
        <input
          value={mac2}
          id='mac2'
          type='text'
          onChange={(e) => setMac2(e.target.value)}
        />
        <br></br>
        <input
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
}

export default App;
