"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Depositions() {
  const slides = [
    {
      text: "“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”",
      name: "João Silva,",
      title: "Finalista da Olimpíada de Física."
    },
    {
      text: "“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”",
      name: "Maria Oliveira,",
      title: "Vencedora da Olimpíada de Química."
    },
    {
      text: "“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”",
      name: "João Silva,",
      title: "Finalista da Olimpíada de Física."
    },
    {
      text: "“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”",
      name: "Maria Oliveira,",
      title: "Vencedora da Olimpíada de Química."
    },
    {
      text: "“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”",
      name: "João Silva,",
      title: "Finalista da Olimpíada de Física."
    },
    {
      text: "“Participar de uma olimpíada científica mudou minha vida. Aprendi muito e fiz amizades incríveis. Mal posso esperar para competir na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA!”",
      name: "Maria Oliveira,",
      title: "Vencedora da Olimpíada de Química."
    },
    // Add more slides here
  ];

  // Duplicate slides for infinite effect
  const duplicatedSlides = [...slides, ...slides, ...slides];
  const totalSlides = duplicatedSlides.length;
  const [currentIndex, setCurrentIndex] = useState(slides.length); // Start at the first of the duplicated slides

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? totalSlides - slides.length : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === totalSlides - slides.length ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  return (
    <>

<div className="relative z-20">
            {/* Div vermelha */}
            <div className="w-full">

    <div className="relative md:flex items-center justify-center ml-20 top-5 hidden">
        <picture>
            <img src="/img-oportunidades-pos-graduandos.webp" className="" alt="" />
        </picture>
        <div className="absolute top-60 z-20 w-full flex flex-col items-start justify-center max-w-6xl ml-3 gap-3">
            <p className="text-white uppercase text-2xl">OPORTUNIDADE PARA</p>
            <p className="text-amber-400 font-bold uppercase max-w-2xl text-4xl pt-4">PÓS-GRADUANDOS EM NANOTECNOLOGIA!
            </p>
            <p className="text-white max-w-3xl text-xl pt-4">Se você está cursando <span className="font-bold"> mestrado
                    ou doutorado</span> e possui um projeto
                de pesquisa nesta área fascinante, temos um convite especial para você!</p>
            <p className="text-white max-w-3xl text-xl font-bold">Cadastre-se para o processo de seleção dos
                Embaixadores da ONANO.</p>
            <p className="text-white max-w-3xl text-xl">
                Faça parte da Comissão Organizadora da 1ª edição da Olimpíada Nacional de Nanotecnologia como membro
                VOLUNTÁRIO, tendo a oportunidade de contribuir diretamente para a educação científica nas escolas e nos
                ajudar a promover um evento de grande impacto ensino de ciências e na educação básica do Brasil.
            </p>
        </div>
    </div>

    <div className="relative flex items-center justify-center md:hidden md:mb-0 mb-28">
        <picture>
            <img src="/img-oportunidades-pos-graduandos-mobile.webp" className="" alt="" />
        </picture>
        <div className="absolute z-20 w-full flex flex-col items-start justify-center gap-3 px-4 max-w-sm top-16">
            <p className="text-white uppercase text-xl text-left">OPORTUNIDADE PARA</p>
            <p className="text-amber-400 font-bold uppercase text-xl">PÓS-GRADUANDOS EM NANOTECNOLOGIA!
            </p>
            <p className="text-white">Se você está cursando <span className="font-bold"> mestrado
                    ou doutorado</span> e possui um projeto
                de pesquisa nesta área fascinante, temos um convite especial para você!</p>
            <p className="text-white font-bold">Cadastre-se para o processo de seleção dos
                Embaixadores da ONANO.</p>
            <p className="text-white">
                Faça parte da Comissão Organizadora da 1ª edição da Olimpíada Nacional de Nanotecnologia como membro
                VOLUNTÁRIO, tendo a oportunidade de contribuir diretamente para a educação científica nas escolas e nos
                ajudar a promover um evento de grande impacto ensino de ciências e na educação básica do Brasil.
            </p>
        </div>
    </div>
            </div>
            <div className="relative">
                    {/* Imagem centralizada e sobrepondo a linha entre vermelho e amarelo */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-end">
                        <picture>
                            <img src="/img-depoimentos-topo.png" className="md:px-4" alt="" />
                        </picture>
                    </div>
                </div>
            {/* Div amarela */}
            <div className="w-full items-center justify-center h-40 bg-blue-950"></div>
        </div>

      <div id="Depositions" className="flex flex-col justify-center items-center">
        <div className="w-full gap-10 flex flex-col items-center justify-center bg-blue-950 py-5">
          <h3 className="flex items-center justify-center text-white font-bold uppercase md:text-4xl text-3xl">
            DEPOIMENTOS
          </h3>
          <div className="relative w-full max-w-7xl md:pt-10 pt-5 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }} // Adjust width based on number of slides
            >
              {duplicatedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 px-4"
                >
                  <div className="flex flex-col items-end text-white border-l-[6px] border-amber-400 md:pl-5 pl-2 md:max-w-lg max-w-72 mx-auto">
                    <p className="text-left text-base">{slide.text}</p>
                    <p className="text-right text-base pt-5">{slide.name}</p>
                    <p className="text-right text-base">{slide.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-transparent border-none cursor-pointer text-amber-400"
            >
              <FaChevronLeft size={40} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-transparent border-none cursor-pointer text-amber-400"
            >
              <FaChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
      <picture>
        <img src="/img-depoimentos.png" className="object-cover w-full h-full" alt="" />
      </picture>
    </>
  );
}
