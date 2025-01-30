import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import Title from "./Title";
import Button from "./Button";
import Image from "next/image";

const About2 = () => {
  return (
    <section className="pt-40 pb-20  min-h-screen w-full bg-black">
      <Wrapper>
        <div className="flex ">
          <div className="flex flex-col w-3/5">
            <Title
              color="white"
              h3Text="¿Quiénes"
              spanText=" somos?"
              inline={true}
            />

            <div className="w-3/5 mt-4">
              <p className="text-white text-xl ">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget.
              </p>
              <p className="text-white text-xl mt-4">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum
                pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
                felis sed leo.
              </p>
            </div>

            <div className="w-3/5">
              <h4 className="text-white text-5xl mt-20">
                ¿Te interesa nuestra{" "}
                <span className="text-white font-bold block">propuesta?</span>
              </h4>
              <div className="mt-8">
                <Button text="CONTACTANOS" />
              </div>
            </div>
          </div>
          <div className="flex w-2/5 gap-4 items-center justify-center ">
            <Image  src="/about1.png"  width={330} height={505} alt="el pepe"/>
            <Image  className="mt-40" src="/about2.png"  width={330} height={505} alt="el pepe"/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About2;
