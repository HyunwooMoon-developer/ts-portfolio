import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { svgs } from '../store';

const ReactParticle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="particles"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
        },
        background: {
          color: {
            value: '#FAFAFA',
          },
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        particles: {
          lineLinked: {
            blink: false,
            color: '#000',
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.03,
            width: 1,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 },
          },
          number: {
            value: 7,
            max: 15,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
              opacity_min: 0.05,
            },
            random: true,
            value: 1,
          },
          rotate: {
            path: true,
          },
          shape: {
            options: {
              image: svgs.map((svg) => ({
                src: svg,
                width: 1,
                height: 1,
                opacity: 0.5,
              })),
            },
            type: 'image',
          },
          size: {
            value: {
              min: 32,
              max: 64,
            },
          },
        },
      }}
    />
  );
};

export default ReactParticle;
