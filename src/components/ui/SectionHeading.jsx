import React from "react";

import { styles } from "../../styles";
import Reveal from "./Reveal";

const SectionHeading = ({ kicker, title, description, align = "left" }) => (
  <Reveal
    className={
      align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
    }
  >
    {kicker && <p className={styles.sectionSubText}>{kicker}</p>}
    <h2 className={`${styles.sectionHeadText} mt-3`}>{title}</h2>
    {description && (
      <p className="mt-5 text-secondary text-[15px] sm:text-[17px] leading-[30px]">
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
