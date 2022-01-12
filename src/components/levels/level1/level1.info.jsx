import React from "react";

export const infoContent = [
  <h3 key="heading1">O que eu preciso fazer?</h3>,
  <p key="paragraph1">
    Neste nível, você precisa criar burguers com a ajuda de elementos HTML..
  </p>,
  <h3 key="heading2">O que é HTML?</h3>,
  <p key="paragraph2">
    HTML (Hypertext Markup Language) não é uma linguagem de programação. É um
    linguagem de marcação que informa aos navegadores da web como estruturar as páginas que você
    visita. HTML consiste em uma série de elementos, que você usa para incluir,
    embrulhar ou marcar diferentes partes do conteúdo para fazê-lo aparecer ou agir em um
    certa maneira.
  </p>,
  <h3 key="heading3">O que é um elemento HTML?</h3>,
  <p key="paragraph3">
    Um elemento HTML é definido por uma tag inicial, algum conteúdo e uma tag final:
    <code>&#60;nomeDaTag&#62;O conteúdo vai aqui...&#60;/nomeDaTag&#62;</code>
    O elemento HTML é tudo, desde a tag inicial até a tag final:
    <code>&#60;h1&#62;Meu primeiro título&#60;/h1&#62;</code>
    Neste nível, você precisará usar apenas elementos div sem nenhum conteúdo
    dentro deles. O elemento Div é o elemento de bloco básico de qualquer marcação.
  </p>,
  <p key="paragraph4">
    Preparamos estilos escritos em CSS para todos os elementos de hambúrgueres. Vocês
    precisa adicionar atributos de classe aos seus elementos div para direcionar os elementos
    com informações de estilo.
  </p>,
  <h3 key="heading4">O que é atributo?</h3>,
  <p key="paragraph5">
    Os elementos podem ter atributos. Os atributos são assim:
    <code>&#60;div class="nome-da-classe"&#62;&#60;/div&#62;</code>
    Os atributos contêm informações extras sobre o elemento que não aparecerá em
    o conteúdo.
  </p>,
  <h4 key="heading5">
    Nota: Não há HTML puro no arquivo level1.jsx. Este é JSX, e é um
    extensão de sintaxe para JavaScript. Tudo que você precisa saber agora sobre
    diferenças entre JSX e HTML é que o atributo 'classe' é chamado
    'className' em jsx. É por isso que neste nível use <em>'className'</em> mas
    saiba que você precisa usar <em>'class'</em> enquanto escreve em HTML puro.
  </h4>,
  <h3 key="heading6">Saiba mais</h3>,
  <p key="paragraph6">
    <a
      href="https://www.computerhope.com/jargon/h/html.htm"
      rel="noopener noreferrer"
      target="_blank"
    >
      O que é HTML?
    </a>
  </p>,
  <p key="paragraph61">
    <a
      href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
      rel="noopener noreferrer"
      target="_blank"
    >
      HTML Básico
    </a>
  </p>,
  <p key="paragraph62">
    <a
      href="https://www.w3schools.com/html/default.asp"
      rel="noopener noreferrer"
      target="_blank"
    >
      Tutorial HTML
    </a>
  </p>
];
