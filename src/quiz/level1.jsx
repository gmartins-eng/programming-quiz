import React from "react";

export const burgers = (ref) => (
  <div className="burgers" ref={ref}>
    <div className="burger para-joao">
      <div class="base-pao"></div>
      <div class="cebola"></div>
      <div class="bife"></div>
      <div class="queijo"></div>
      <div class="pepino"></div>
      <div class="ovo"></div>
      <div class="topo-pao"></div>
    </div>

    <div className="burger para-maria">
      <div class="base-pao"></div>
      <div class="tomate"></div>
      <div class="bife"></div>
      <div class="queijo"></div>
      <div class="pimentao"></div>
      <div class="alface"></div>
      <div class="topo-pao"></div>
    </div>

    <div className="burger para-pedro">
      <div class="base-pao"></div>
      <div class="tomate"></div>
      <div class="bacon"></div>
      <div class="queijo"></div>
      <div class="ovo"></div>
      <div class="topo-pao"></div>
    </div>
  </div>
);
