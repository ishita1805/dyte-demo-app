import React, { useEffect } from 'react';
import { DyteSidebar } from '@dytesdk/react-ui-kit';
import { useDyteMeeting } from '@dytesdk/react-web-core';
import products from '../../utils/products';
import './style.css';

interface Props {
    states: any,
}

const Sidebar = (props: Props) => {
    const {
        states,
    } = props;
    const { meeting } = useDyteMeeting();


    useEffect(() => {
        

    }, [meeting?.plugins.all])


    const openPlugin = async (data: any) => {
        const plugins = meeting?.plugins.all.toArray()
        const plugin = plugins?.find(p => p.id === '4a67bc66-02b1-46a1-998f-481f87313e85');

        if (!plugin) return;

        plugin.removeAllListeners('ready');
       
        if (!plugin.active) {
            await plugin.activate();
            plugin.on('ready', function() {
                plugin.sendData({
                    data: {
                        eventName: 'product',
                        payload: data,
                    }
                });
            });
            return;
        }

        plugin.sendData({
            data: {
                eventName: 'product',
                payload: data,
            }
        });
        
    }
    
    return (
        <>
        {
            states.activeSidebar
            ? <DyteSidebar
                meeting={meeting}
                defaultSection='participants'
                defaultChecked={false}
            />
            : <div className='custom-sidebar'> 
                <div className='custom-sidebar-container'>
                    {
                        products.map((item, index) => (
                            <div
                                className='product-container'
                                key={index}
                            >
                                <img src={item.img} alt={item.img} />
                                <div className='button-container'>
                                    <button onClick={() => openPlugin(item)}>
                                        <span
                                            className="material-symbols-outlined"
                                        >
                                            visibility
                                        </span>
                                        Showcase
                                    </button>
                                    <button>
                                        <span
                                            className="material-symbols-outlined"
                                        >
                                            add
                                        </span>
                                        Add
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
        </>
    )
}

export default Sidebar