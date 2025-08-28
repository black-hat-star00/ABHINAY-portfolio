import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { certificates } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TCertificate } from "../../types";

const CertificateCard: React.FC<{ index: number } & TCertificate> = ({
  index,
  name,
  issuer,
  date,
  image,
  credentialLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
            {credentialLink && (
              <div className="card-img_hover absolute inset-0 m-3 flex items-end justify-end">
                <a
                  href={credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="black-gradient flex h-10 w-10 items-center justify-center rounded-full text-white"
                >
                  🔗
                </a>
              </div>
            )}
          </div>
          <div className="mt-5">
            <h3 className="text-[20px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-1 text-[14px]">{issuer}</p>
            <p className="text-secondary mt-1 text-[12px]">{date}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certificates} />

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certifications");


