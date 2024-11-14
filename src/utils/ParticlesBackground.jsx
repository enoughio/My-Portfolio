import Particles from "@tsparticles/react";
import ParticlesConfig from "../Components/config.js/Particles.config.js";
const ParticlesBackground = () => {
  return (
    <Particles params={ParticlesConfig} ></Particles>
  )
}

export default ParticlesBackground;