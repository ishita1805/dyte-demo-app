import React, { useEffect, useRef, useState } from 'react'
import {
    DyteCameraToggle,
    DyteChatToggle,
    DyteClock,
    DyteControlbar,
    DyteDialogManager,
    DyteGrid,
    DyteGridPagination,
    DyteHeader,
    DyteLeaveButton,
    DyteLogo,
    DyteMeetingTitle,
    DyteMenu,
    DyteMenuList,
    DyteMicToggle,
    DyteMoreToggle,
    DyteNotifications,
    DyteParticipantCount,
    DyteParticipantsAudio,
    DyteParticipantsToggle,
    DytePluginsToggle,
    DyteScreenShareToggle,
    DyteSettingsToggle,
} from '@dytesdk/react-ui-kit';
import { useDyteMeeting } from '@dytesdk/react-web-core';
import applyDesign from '../utils';
import logo from '../assets/logo.png';
import './style.css';
import Sidebar from '../components/sidebar';

const Meeting = () => {
  const { meeting } = useDyteMeeting();
  const [states, setStates] = useState<any>({
    prefs: { muteNotificationSounds: false },
  });
  const mainEl = useRef<HTMLDivElement>(null);
  const setState = (s: any) => setStates((states: any) => ({ ...states, ...s }));

  useEffect(() => {
    if (!mainEl.current) return;
    applyDesign(mainEl.current);

    mainEl.current.addEventListener('dyteStateUpdate', (state: any) => {
        setState(state?.detail);
    })

  }, [])
  
  return (
    <div className='meeting-container' ref={mainEl}>
        <DyteParticipantsAudio meeting={meeting}/>
        <DyteNotifications
            meeting={meeting}
            states={states}
            config={{
                config: {
                  notifications: ['chat', 'participant_joined', 'participant_left'],
                  notification_sounds: ['chat', 'participant_joined', 'participant_left'],
                  participant_joined_sound_notification_limit: 10,
                  participant_chat_message_sound_notification_limit: 10,
                },
            }}
        />
        <DyteDialogManager
            meeting={meeting}
            states={states}
            onDyteStateUpdate={(e) => setState(e.detail)}
        />

        <DyteHeader style={{ width: '100%' }}>
            <DyteLogo config={{ designTokens: { logo }}}/>
            <div className='dyte-row-flex'>
                <DyteMeetingTitle meeting={meeting}/>
            </div>
            <DyteGridPagination meeting={meeting} states={states}/>
            <DyteParticipantCount meeting={meeting}/>
            <DyteClock meeting={meeting}/>
        </DyteHeader>

        <div className='grid-container'>
            <DyteGrid
                meeting={meeting}
                states={states}
            />
            <Sidebar states={states} />
        </div>

        <DyteControlbar style={{ width: '100%' }}>
            <div className='dyte-row big-screen'>
                <DyteSettingsToggle meeting={meeting} states={states}/>
                <DyteScreenShareToggle meeting={meeting}/>
            </div>
            <div className='dyte-row-flex'>
                <DyteMicToggle meeting={meeting} />
                <DyteCameraToggle meeting={meeting}/>
                <DyteLeaveButton />
                <DyteMenu
                    placement="top" 
                    className='small-screen'
                >
                    <DyteMoreToggle size="sm" slot='trigger' />
                    <DyteMenuList >
                        <DyteSettingsToggle
                            meeting={meeting}
                            states={states}
                        />
                        <DyteScreenShareToggle
                            meeting={meeting}
                        />
                        <DyteChatToggle
                            meeting={meeting}
                        />
                        <DyteParticipantsToggle
                            meeting={meeting}
                        />
                        <DytePluginsToggle
                            meeting={meeting}
                        />
                    </DyteMenuList>
                </DyteMenu>
            </div>
            <div className='dyte-row big-screen'>
                <DyteChatToggle meeting={meeting} />
                <DyteParticipantsToggle meeting={meeting}/>
                <DytePluginsToggle meeting={meeting} />
            </div>
        </DyteControlbar>
        
    </div>
  )
}

export default Meeting