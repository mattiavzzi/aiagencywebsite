'use client'

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen">
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <div
          data-fillout-id="6BFK59t2txus"
          data-fillout-embed-type="fullscreen"
          data-fillout-inherit-parameters
          style={{
            width: '100%',
            height: '100%'
          }}
        />
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,  // Changed from 'right: 0' to 'left: 0'
          width: '200px',
          height: '150px',
          backgroundColor: '#000000',
          zIndex: 9999
        }} />
      </div>
    </div>
  );
}
