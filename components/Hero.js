import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="
        h-screen overflow-hidden snap-start
        flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="opacity font-highlight text-4xl tracking-widest text-center capitalize">
        Pet services in Elmwood Park  <br /> & <br /> surrounding neighborhoods
      </h1>
    </motion.section>
  );
}

export default Hero;