import React, { useEffect, useState } from 'react';
;

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);
    return () => window.removeEventListener('mousemove', setFromEvent);
  }, []);

  return (
    <div  style={{ left: `${position.x}px`, top: `${position.y}px`, height:'8px',width:'8px',background: 'linear-gradient(to right, rgb(255, 189, 132) 0px, rgb(255, 31, 142) 100%)'  }}></div>
  );
};

export default Cursor;
