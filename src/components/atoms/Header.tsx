import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { textVariant } from "../../utils/motion";

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const Content = () => (
    <>
      <p className={`${styles.sectionSubText} motion-reduce:opacity-100`}>{p}</p>
      <h2 className={`${styles.sectionHeadText} will-change-transform`}>{h2}</h2>
    </>
  );

  return useMotion === true ? (
    <motion.div
      variants={textVariant()}
      viewport={{ once: true, amount: 0.3 }}
      whileInView="show"
      initial="hidden"
    >
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
};
