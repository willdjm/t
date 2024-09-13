"use client"

export function About() {

return (

<>
<div className="flex flex-col justify-center items-center py-10 md:py-5">
    <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-12'>
        <div className="flex flex-col w-full items-start justify-start gap-10 px-4">
            <p id="About" className="text-blue-950 font-bold uppercase md:text-4xl text-3xl text-center">SOBRE A OLIMPÍADA</p>
            <p className="text-blue-950 border-l-[7px] border-green-900 pl-5 max-w-[51rem] md:text-xl text-lg pt-4">A OLIMPÍADA NACIONAL DE
                NANOTECNOLOGIA (ONANO) é um evento inédito no Brasil, dedicado a promover o conhecimento, popularizar e
                divulgar o fascinante campo da <span className="font-bold">nanociência e os avanços da nanotecnologia.</span></p>
            
            <div>
                <p className="text-blue-950 md:text-4xl text-3xl font-bold">Será <span className="text-amber-400 uppercase font-bold">GRATUITA</span> e voltada para estudantes do</p>
                <span className="font-bold md:text-5xl text-4xl w-full text-blue-950">ensino fundamental, médio e técnico</span>
                <p className="md:text-4xl text-3xl font-bold text-blue-950"> de escolas públicas e privadas.</p>
            </div>
        </div>
        <div className="md:flex md:flex-row flex flex-col w-full items-start justify-start gap-8">
            <p className="text-blue-950 max-w-xl text-[19.04px] px-4">Nossa missão é despertar a curiosidade científica e tecnológica e
                estimular o interesse dos jovens pela Ciência, Tecnologia, Engenharia e Matemática (STEM).</p>
            <div className=" flex items-start justify-start">
                <picture>
                <img src="/img-about2.webp" className="hidden md:flex" alt="" />
                    <img src="/img-about-mobile.webp" className="flex md:hidden" alt="" />
                </picture>
            </div>
        </div>
    </div>
</div>



</>
);
}