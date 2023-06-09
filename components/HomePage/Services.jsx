/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";

const Services = () => {
  const textVariants = {
    offscreen: {
      opacity: 0,
      y: -100,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const cardVariants = {
    offscreen: {
      y: -100,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <motion.header
          // initial="offscreen"
          // whileInView="onscreen"
          // transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.h4 >Services</motion.h4>
          <div className={styles.lemon__ctn}>
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
          </div>
          <motion.h1 >What We Offer</motion.h1>
        </motion.header>

        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.card__ctn}
        >
          <motion.div variants={cardVariants} className={styles.card}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 >
              Farm management
              </motion.h3>
              <motion.p >
              You own the farm, we manage it for you  
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/fruits.png" alt="fruits" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>
          <motion.div variants={cardVariants} className={styles.card}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 >Farm land ownership</motion.h3>
              <motion.p >
              Own a farm space remotely and cultivate any crop you want on it.
              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/fruits.png" alt="fruits" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>
          <motion.div variants={cardVariants} className={styles.card}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 >Ownership</motion.h3>
              <motion.p >
              Own a farm space remotely and cultivate any crop you want on it.

              </motion.p>
            </motion.div>
            <div className={styles.card__img}>
              <img src="/images/fruits.png" alt="fruits" />
              <img
                src="/svgs/ic-arrow-right.svg"
                alt="arrow-right"
                width={75}
                height={75}
                className={styles.arrow__right}
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
