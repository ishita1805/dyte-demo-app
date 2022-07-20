import React from 'react'
import { useDyteSelector } from '@dytesdk/react-web-core';
import Setup from './Setup';
import Meeting from './Meeting';

const DyteMeetingComp = () => {
    
    
    const roomJoined = useDyteSelector((m) => m.self.roomJoined);


  return (
    <>
    {
        !roomJoined
        ? <Setup />
        : <Meeting />
    }
        
    </>
  )
}

export default DyteMeetingComp