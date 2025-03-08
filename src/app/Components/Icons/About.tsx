"use client";
import Wrapper from "../Wrapper/Wrapper";
import DownArrow2 from "./DownArrow2";
import Title from "../Title";
import { Card } from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutActivities } from "@/app/constants/constants";

import CircleTwo from "./CirclesBanner/CircleTwo";

interface Activity {
  id: string; // Puede ser un número o una cadena
  img: string; // URL de la imagen
  title: string; // Título de la actividad
  hrefCta: string; // URL del enlace
}

const About = () => {
   const { scrollY } = useScroll(); // Captura el scroll vertical
  
    // Mapea el scroll a una rotación
    const rotation = useTransform(scrollY, [0, 1000], [0, 360]);
  
  
  return (
    <section
      id="que-hacemos"
      className="min-h-screen  relative w-full bg-white overflow-hidden  "
    >
      <motion.div 
       className="absolute z-2 top-[-600px] right-[-400px] lg:top-[-300px] lg:right-[-300px] h-3/4"
       style={{
         rotate: rotation,  // Aplica la rotación dinámica
       }}
      >
        <CircleTwo width="100%" height="100%" />
      </motion.div>

      <motion.div className="absolute z-2 bottom-[-600px] left-[-400px] lg:bottom-[-300px] lg:left-[-300px] h-3/4 "
       style={{
        rotate: rotation,  // Aplica la rotación dinámica
      }}
      >
        <CircleTwo width="100%" height="100%" />
      </motion.div>

      <Wrapper>
        <div className="mt-40  mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title
                color="black"
                h3Text="Esto es lo"
                spanText=" que hacemos"
                inline={false}
              />
            </motion.div>

            <div className="flex items-baseline z-index5">
              <motion.h4
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-orangeColor text-[19px] font-semibold leading-normal tracking-[6.46px] uppercase"
              >
                NUESTROS SERVICIOS
              </motion.h4>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center items-center bg-grayLight rounded-full w-12 h-12"
              >
                <DownArrow2 />
              </motion.span>
            </div>
          </div>

          <section className="grid gap-4 lg:gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 z-4 mt-10">
            {aboutActivities.map((activity: Activity) => (
              <Card
                key={activity.id}
                title={activity.title}
                img={activity.img}
                hrefCta={activity.hrefCta}
              />
            ))}
          </section>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
