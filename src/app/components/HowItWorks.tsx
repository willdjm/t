"use client"

export function HowItWorks() {

    return (



            <div className="flex items-center justify-center w-full px-4 ">
                <div className='justify-start items-center md:flex md:flex-row flex flex-col w-full gap-10 relative z-10 md:ml-10'>
                    <picture className="">
                        <img src="/img-objetivos.webp" className="" alt="" />
                    </picture>
                    <div id="HowItWorks" className="flex items-center justify-center gap-5 max-w-2xl">
                        <div
                            className="flex flex-col gap-8 items-start justify-start text-blue-950 md:ml-5">
                            <p className="text-left uppercase font-bold md:text-3xl text-xl">COMO FUNCIONARÁ</p>
                            <div className="border-l-[7px] border-blue-950 pl-2 flex flex-col gap-4">
                                <p className="text-left text-xl ml-3">A OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é </p>
                                <span className="font-bold text-2xl text-left ml-3">100% digital e totalmente gratuita.</span>
                                <p className="text-left text-xl ml-3 max-w-[29rem]">Cada estudante irá percorrer uma trilha de aprendizagem e aprender gradativamente os conceitos da nanociência e nanotecnologia.</p>
                                <p className="text-left text-xl ml-3 max-w-[34rem]">Todo o conteúdo programático (currículo) da ONANO foi testado em sala de aula por mais de 7 anos e a metodologia que será aplicada garante que ninguém precisa ter conhecimento prévio em nanotecnologia para mandar bem nessa competição.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}