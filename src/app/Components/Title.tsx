import React from "react";
import classNames from "classnames";

interface TitleProps {
  color?: "white" | "black"; // Color opcional: blanco o negro
  h3Text: string; // Texto para el h3
  spanText: string; // Texto para el span
  inline?: boolean; // Determina si el span es inline o block
}

const Title: React.FC<TitleProps> = ({ color = "black", h3Text, spanText, inline = false }) => {
  return (
    <h3
      className={classNames(
        "text-7xl font-normal",
        {
          "text-black": color === "black",
          "text-white": color === "white",
        }
      )}
    >
      {h3Text}
      <span
        className={classNames("font-bold", {
          block: !inline, // Si `inline` es falso, aplicamos `block`
          inline: inline, // Si `inline` es verdadero, aplicamos `inline`
        })}
      >
         {spanText}
      </span>
    </h3>
  );
};

export default Title;
