import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import Title from "./Title";
import Button from "./Button";

const Form = () => {
  return (
    <section id="contacto" className="min-h-screen w-full bg-white mt-40">
      <Wrapper>
        <Title h3Text="Contanos" spanText="tu proyecto" color="black" />
        <form className="w-full" action="">
          <div className="w-full mt-20 flex gap-10">
            <input
              className="w-full sm:w-1/2 border-b border-black placeholder:text-[#ADADAD] placeholder:font-outfit placeholder:text-[18px] placeholder:font-normal placeholder:tracking-[6.12px] placeholder:uppercase placeholder:leading-normal"
              type="text"
              name="Nombre"
              id=""
              placeholder="TU NOMBRE"
            />
            <input
              className="w-full sm:w-1/2 border-b border-black placeholder:text-[#ADADAD] placeholder:font-outfit placeholder:text-[18px] placeholder:font-normal placeholder:tracking-[6.12px] placeholder:uppercase placeholder:leading-normal"
              type="email"
              name="Nombre"
              id=""
              placeholder="TU EMAIL"
            />
          </div>

          <div className="w-full min-h-64">
            <textarea
              className="border-b min-h-64 mt-10  border-black w-full placeholder:text-[#ADADAD] placeholder:font-outfit placeholder:text-[18px] placeholder:font-normal placeholder:tracking-[6.12px] placeholder:uppercase placeholder:leading-normal"
              name="contanos"
              id=""
              placeholder="Contanos sobre tu proyecto"
            ></textarea>
          </div>
          <div className="flex w-full justify-center lg:justify-end mt-20">
            <Button text="ENVIAR MENSAJE" />
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

export default Form;
