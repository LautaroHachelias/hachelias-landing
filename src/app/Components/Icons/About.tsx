import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import DownArrow2 from "./DownArrow2";
import Title from "../Title";
import  {Card}  from "./Card";
import { aboutActivities } from "@/app/constants/constants";



interface Activity {
  id: string; // Puede ser un número o una cadena
  img: string; // URL de la imagen
  title: string; // Título de la actividad
  hrefCta: string; // URL del enlace
}



const About = () => {
  
  return (
    <section className="min-h-screen w-full bg-white">
      <Wrapper>
        <div className="mt-40">
          <Title
            color="black"
            h3Text="Esto es lo"
            spanText=" que hacemos"
            inline={false}
          />

          <div className="flex items-baseline">
            <h4 className="mt-6  text-orangeColor text-[19px] font-semibold leading-normal tracking-[6.46px] uppercase">
              NUESTROS SERVICIOS{" "}
            </h4>
            <span className="flex justify-center items-center bg-grayLight rounded-full w-12 h-12">
              <DownArrow2 />
            </span>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5   mt-10">
            {aboutActivities.map((activity: Activity) => (
             <Card key={activity.id} title={activity.title} img={activity.img} hrefCta={activity.hrefCta}  />
          ))}
          </section>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
