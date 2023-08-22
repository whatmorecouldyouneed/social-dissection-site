import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import videoSource from '/src/assets/Neurons In-Action.mp4';
import entranceTunnelVideo from '/src/assets/entrance-tunnel.mp4';

function LandingPage() {
  const [playEntrance, setPlayEntrance] = useState(false);
  const videoRef = useRef(null);

  const handleTitleClick = () => {
    setPlayEntrance(true);
  }

  useEffect(() => {
    if (playEntrance) {
      videoRef.current.play();

      setTimeout(() => {
        window.location.href = '/shop'; // Navigate to the shop after 7 seconds
      }, 7000);
    }
  }, [playEntrance]);

  if (playEntrance) {
    return (
      <div className="fullscreen-video">
        <video ref={videoRef} muted autoPlay>
          <source src={entranceTunnelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div>
      <section className="video-background">
        <video muted loop autoPlay>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="brand">
        <h1 onClick={handleTitleClick}>Social Dissection</h1>
      </section>
    </div>
  );
}

export default LandingPage;
