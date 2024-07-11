/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';

function Souris() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);

    return (
        <div style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '2px solid #F99D1C',
            opacity: 0.6,
            pointerEvents: 'none',
            left: position.x - 20,
            top: position.y - 20,
            width: 40,
            height: 40,
            // transform: 'translate(-50%, -50%)',
            pointer: 'none',
            transition: 'left 0.6s ease-out, top 0.6s ease-out', // Ajout de la transition
        }} />
    );
}

export default Souris;
