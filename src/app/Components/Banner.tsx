import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import Button from "./Button";
import CircleOne from "./Icons/CirclesBanner/CircleOne";
import CircleTwo from "./Icons/CirclesBanner/CircleTwo";
import CircleThree from "./Icons/CirclesBanner/CircleThree";
import CircleFour from "./Icons/CirclesBanner/CircleFour";
import CircleFive from "./Icons/CirclesBanner/CircleFive";
import DownArrow from "./Icons/DownArrow";

const Banner = () => {
  return (
    <section className="w-full h-screen flex  pt-20 lg:pt-40 sm:pt-20  relative overflow-hidden bg-black ">
      {/* Círculos arriba a la derecha */}
      <div className="absolute   top-0 right-0 flex gap-4  p-4">
        <CircleOne />
        <CircleTwo />
        <CircleThree />
        <CircleFour />
      </div>
      {/* Contenido principal */}
      <Wrapper>
        <div className="z-2">
          <h1 className="text-white text-8xl sm:text-9xl font-bold">H A V</h1>
          <h2 className="text-white text-3xl font-thin whitespace-nowrap ">
            Impulsando <span className="font-bold">tus historias </span>
          </h2>
          <div className="flex flex-col md:flex gap-4 mt-10">
            <Button text="¿Qué hacemos?" />
            <Button
              text="CONTACTANOS"
              bgColor="transparent"
              circleColor="grayColor"
            />
          </div>
        </div>
      </Wrapper>
      <div className="absolute bottom-40 left-0 flex  gap-4 mt-40 p-4">
        <CircleFive />
        <CircleThree />
        <CircleTwo />
        <CircleOne />
      </div>

      {/* <div className="hidden absolute sm:right-20 md:right-20 lg:right-20 bottom-60 xl:right-40 w-16 h-16 rounded-full border-red-400 ">
        <DownArrow/>
      </div> */}
      <div className="absolute hidden sm:flex right-4 bottom-4 sm:right-8 sm:bottom-8 md:right-50 md:bottom-60 lg:right-50 lg:bottom-60 xl:right-50 xl:bottom-60 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full">
        <DownArrow width="116" height="116" viewBox="0 0 116 116" />
      </div>
    </section>
  );
};

export default Banner;
