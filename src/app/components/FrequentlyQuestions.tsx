"use client"

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SlArrowDown } from "react-icons/sl";

export function FrequentlyQuestions() {

return (

<div id="FrequentlyQuestions" className="flex justify-center items-center">

    <div className='justify-center items-center flex flex-col py-20 md:max-w-6xl w-full gap-16'>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold md:text-4xl text-3xl uppercase text-center">FAQ</p>
            <p className="text-blue-950 md:text-4xl text-2xl text-center">(Perguntas Frequentes)</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-xl text-center">Como faço para me inscrever?</p>
            <p className="text-blue-950 text-base text-center">Acesse o formulário de inscrição online e preencha todos os campos
                obrigatórios.</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <p className="text-blue-950 font-bold text-xl text-center">Há algum custo para participar?</p>
            <p className="text-blue-950 text-base text-center">A inscrição na OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é <span
                    className='underline'>gratuita.</span></p>
        </div>
        <button className="flex flex-col w-full items-center justify-center">
            <a href="#" target="_blank" className="text-blue-950 text-base flex items-center justify-center gap-2 underline">Ver
                mais
                <SlArrowDown /></a>
        </button>
    </div>

</div>

);
}

