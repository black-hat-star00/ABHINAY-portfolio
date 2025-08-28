import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { textVariant, fadeIn } from "../../utils/motion";
import Typewriter from "../atoms/Typewriter";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} shimmer-text`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} text-white-100 mt-2`}
          >
            <Typewriter
              words={[config.hero.p[0], config.hero.p[1]]}
              typingSpeedMs={60}
              deletingSpeedMs={35}
              pauseMs={1000}
            />
          </motion.p>
        </div>
      </motion.div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
