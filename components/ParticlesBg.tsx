"use client";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

async function init(engine: Engine) {
  await loadSlim(engine);
}

export default function ParticlesBg() {
  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true } },
            color: { value: "#93c5fd" },
            links: {
              enable: true,
              color: "#93c5fd",
              opacity: 0.3,
              distance: 150,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              outModes: { default: "bounce" },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 140, links: { opacity: 0.6 } } },
          },
        }}
      />
    </ParticlesProvider>
  );
}
