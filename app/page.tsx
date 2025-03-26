'use client'

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0">
        <div
          data-fillout-id="6BFK59t2txus"
          data-fillout-embed-type="fullscreen"
          data-fillout-inherit-parameters
          className="w-full h-full"
        />
        <style jsx global>{`
          @media (max-width: 768px) {
            .mobile-hide,
            div[class*="flex justify-center items-center lg:pb-0 group bg-transparent lg:hidden"],
            .sc-acd02e1-1 {
              display: none !important;
            }
          }
        `}</style>
        <div 
          className="mobile-hide fixed bottom-0 left-0"
          style={{
            width: '200px',
            height: '150px',
            backgroundColor: '#000000',
            zIndex: 9999
          }} 
        />
      </div>
    </div>
  );
}
