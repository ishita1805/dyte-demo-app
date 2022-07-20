/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import DyteMeeting from './meeting';
import axios from 'axios';


const App = () => {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    const init = async () => {
      const options = {
        method: 'POST',
        url: `${process.env.REACT_APP_URL}/organizations/${process.env.REACT_APP_ORG_ID}/meetings/${process.env.REACT_APP_MEETING_ID}/participant`,
        headers: {'Content-Type': 'application/json', Authorization: '7c8a847992b9b76d9053'},
        data: {
          clientSpecificId: 'sacdvf',
          userDetails: {name: 'User' },
        }
      };

      const req = await axios.request(options);

      initMeeting({
        roomName: 'vcihyr-cnjsbc',
        authToken: req?.data?.data?.authResponse.authToken,
        apiBase: 'https://api.staging.dyte.in',
        defaults: {
          audio: false,
          video: false,
        },
      });
    }
    
    init();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <DyteProvider value={meeting}>
        <DyteMeeting />
      </DyteProvider>
    </div>
  )
}

export default App