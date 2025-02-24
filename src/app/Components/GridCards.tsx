import React from "react";
import { eventos } from "../constants/constants";
import HoverArticle from "./HoverArticle";
import Wrapper from "./Wrapper/Wrapper";

const GridCards = () => {
  return (
    <section className="flex items-start w-full mb-10">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-4 w-full">
          {eventos.map((item, index) => (
            <div className="flex-grow " key={index}>
              <HoverArticle imageSrc={item.imageSrc} text={item.text} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default GridCards;
