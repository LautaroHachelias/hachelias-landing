"use client";
import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import Button from "./Button";
import CircleOne from "./Icons/CirclesBanner/CircleOne";
import CircleTwo from "./Icons/CirclesBanner/CircleTwo";
import CircleThree from "./Icons/CirclesBanner/CircleThree";
import CircleFour from "./Icons/CirclesBanner/CircleFour";
import CircleFive from "./Icons/CirclesBanner/CircleFive";
import DownArrow from "./Icons/DownArrow";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  const { scrollY } = useScroll(); // Captura el scroll vertical

  // Mapea el scroll a una rotación
  const rotation = useTransform(scrollY, [0, 1000], [0, 360]);
  const rotation2 = useTransform(scrollY, [0, 1000], [0, -360]);

  return (
    <section
      id="home"
      className="w-full z-index5 h-screen flex  pt-20 lg:pt-40 sm:pt-20  relative overflow-hidden bg-black "
    >
      {/* Círculos arriba a la derecha */}
      <div className="absolute  top-0 right-[-150px] flex gap-4  p-4">
       <motion.div style={{ rotate: rotation }}>
        <CircleOne />
      </motion.div>
      <motion.div style={{ rotate: rotation }}>
        <CircleTwo />
      </motion.div>
      <motion.div style={{ rotate: rotation }}>
        <CircleThree />
      </motion.div>
      <motion.div style={{ rotate: rotation }}>

      <CircleThree />
      </motion.div>
      </div>
      {/* Contenido principal */}
      <Wrapper>
        <div className="z-2 h-3/4 lg:h-auto flex flex-col justify-around">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-8xl sm:text-9xl font-bold"
            >
              H A V
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white text-3xl font-thin sm:whitespace-nowrap"
            >
              Impulsando <span className="font-bold">tus historias</span>
            </motion.h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button text="¿Qué hacemos?" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                text="CONTACTANOS"
                bgColor="transparent"
                circleColor="grayColor"
              />
            </motion.div>
          </div>
        </div>
      </Wrapper>
      <div className="absolute bottom-40 left-0 flex  gap-4 mt-40 p-4">
        <CircleFive />
      <motion.div style={{ rotate: rotation2 }}>
        <CircleThree />
      </motion.div>
      <motion.div style={{ rotate: rotation }}>
        <CircleTwo />
      </motion.div>
      <motion.div style={{ rotate: rotation }}>
        <CircleOne />
      </motion.div>
      </div>

      {/* <div className="hidden absolute sm:right-20 md:right-20 lg:right-20 bottom-60 xl:right-40 w-16 h-16 rounded-full border-red-400 ">
        <DownArrow/>
      </div> */}
      {/* <div className="absolute hidden sm:flex right-4 bottom-4 sm:right-8 sm:bottom-8 md:right-50 md:bottom-60 lg:right-50 lg:bottom-60 xl:right-50 xl:bottom-60 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full">
        <DownArrow width="116" height="116" viewBox="0 0 116 116" />
      </div> */}
    </section>
  );
};

export default Banner;
