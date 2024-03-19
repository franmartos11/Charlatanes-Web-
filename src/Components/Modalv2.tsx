"use client"

import React, { useEffect, useState } from 'react';
import Card from "./Card";

export default function Modal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void; }){
    if (!isVisible) return null;
    useEffect(() => {
        // Agrega la clase 'overflow-hidden' al body cuando el modal está visible
        if (isVisible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Limpia el efecto cuando el componente se desmonta
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isVisible]);
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose(); // Llama a la función onClose para cerrar el modal
        }
    };

    return (
        <div className="fixed overflow-hidden inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button className='ml-80 ' onClick={() => {onClose(); document.body.classList.remove('overflow-hidden');}}>x</button>
                <Card></Card> 
            </div>
        </div>
    )
}