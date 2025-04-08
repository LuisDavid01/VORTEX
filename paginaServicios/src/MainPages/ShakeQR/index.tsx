import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const ShakeQR: React.FC = () => {
  const [showQR, setShowQR] = useState<boolean>(false);
  const [canClose, setCanClose] = useState<boolean>(false);
  const url = 'https://vortex-cr.vercel.app/';

  useEffect(() => {
    if (typeof window !== 'undefined' && 'DeviceMotionEvent' in window) {
      const handleMotion = (event: DeviceMotionEvent) => {
        const acceleration = event.accelerationIncludingGravity;
        
        if (acceleration) {
          const { x, y, z } = acceleration;
          const movement = Math.sqrt(
            (x || 0) ** 2 + 
            (y || 0) ** 2 + 
            (z || 0) ** 2
          );


          if (!showQR && movement > 25) {
            setShowQR(true);
            setTimeout(() => setCanClose(true), 1000);
          }

          else if (showQR && canClose && movement > 15) {
            setShowQR(false);
            setCanClose(false);
          }
        }
      };

      if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
        (DeviceMotionEvent as any).requestPermission()
          .then((permissionState: string) => {
            if (permissionState === 'granted') {
              window.addEventListener('devicemotion', handleMotion);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('devicemotion', handleMotion);
      }

      return () => {
        window.removeEventListener('devicemotion', handleMotion);
      };
    }
  }, [showQR, canClose]);

  if (!showQR) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}>
        <QRCodeSVG 
          value={url}
          size={200}
          level="H"
          includeMargin={true}
        />
        <p style={{ margin: 0 }}>Escanea para visitar:</p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0066cc', textDecoration: 'none' }}
        >
          {url}
        </a>
        <button
          onClick={() => setShowQR(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Cerrar
        </button>
     
      </div>
    </div>
  );
};

export default ShakeQR;