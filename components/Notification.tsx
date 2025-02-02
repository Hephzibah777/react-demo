import React, { useEffect } from 'react'
import { FC } from 'react';

interface notiProp{
    msg:string;
    onClose:()=>void;
}
const Notification:FC<notiProp>=({msg, onClose})=>{
    useEffect(()=>{
            const timer=setTimeout(()=>{
                onClose();
            }, 5000);

            return ()=>clearTimeout(timer);
    }, [])
    return <div className='toastBox'>
        <div className='toast'>
        {msg}
        </div>
    </div>
}

export default Notification;
