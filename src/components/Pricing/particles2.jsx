"use client"
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesN = () => {

  return(
    <Particles
          className="absolute inset-0 z-[1]"
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0
            },
            fpslimit:120,
            particles: {
              number: { value: 10, density: { enable: false, value_area: 200 } },
              color: { value: "#ffffff" },
              shape: {
                type: "star",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: {
                  src:
                    "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 4,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "right",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: { enable: true, mode: "push" },
                onclick: { enable: true, mode: "" },
                resize: true
              },
              modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
  }}
  />
  )



}

export default ParticlesN;