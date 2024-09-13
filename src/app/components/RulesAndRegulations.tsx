"use client"

import { SlArrowDown } from "react-icons/sl";

export function RulesAndRegulations() {

return (

<>
<div id="RulesAndRegulations" className="flex flex-col justify-start items-center relative">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10'>
    </div>
    <div className="relative flex items-center justify-center w-full ">
        <picture className="w-full relative">
            <img src="/bg-regras.webp" className="w-full h-[25rem] relative" alt="" />
        </picture>
        <div className="absolute md:gap-14 gap-8 z-20 w-full flex flex-col items-center justify-center md:max-w-6xl px-4 md:py-24">
            <p className="text-blue-950 font-bold md:text-4xl text-3xl uppercase text-center">REGRAS E REGULAMENTOS</p>
            <p className="text-blue-950 text-base text-center">Para garantir uma competição justa e organizada, todos os participantes
                devem seguir as regras e regulamentos da olimpíada:</p>
            <button className="flex flex-col w-full items-center justify-center">
                <a href="#" target="_blank"
                    className="text-blue-950 text-base flex items-center justify-center gap-2 text-center underline">Ver mais
                    <SlArrowDown /></a>
            </button>
        </div>
    </div>
    <div className="relative flex items-center justify-center w-full md:pt-32    pt-72">
        <div className="absolute z-0 w-full flex items-start justify-start md:-top-56 -top-10 mr-8">
            <picture className="">
                <img src="/img-regras.webp" className="" alt="" />
            </picture>
        </div>
    </div>

</div>



</>
);
}