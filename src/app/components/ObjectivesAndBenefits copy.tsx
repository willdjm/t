"use client"

export function ObjectivesAndBenefits() {

    return (

        <>
            <div className="relative hidden md:flex flex-col justify-start items-center">
                <div id="ObjectivesAndBenefits"
                    className="flex items-center justify-center h-72 w-72 rounded-full bg-gray-100 relative -bottom-56 z-50">
                    <h1 className="text-blue-950 font-bold uppercase text-4xl text-center">OBJETIVOS E BENEFÍCIOS</h1>
                </div>
                <div className="relative flex items-start justify-center w-full -bottom-20">
                    <picture className=" w-full relative">
                        <img src="/bg-objetivos.webp" className="object-cover w-full h-auto relative z-30" alt="" />
                    </picture>
                    <div className="absolute z-50 w-full flex flex-col items-start justify-center md:max-w-6xl py-20 my-3">
                        <div className="flex flex-col w-full items-start justify-start text-center relative md:max-w-lg gap-7">
                            <div
                                className="flex flex-col items-start justify-start">
                                <p className="text-left text-3xl font-medium text-amber-400 uppercase">DIVULGAR</p>
                                <p className="text-left border-b border-amber-400 text-amber-400 font-semibold text-base">a ciência e popularizar a nanotecnologia</p>
                                <p className="text-left text-white text-base">A realização de eventos nacionais como a ONANO é essencial para divulgar essa área da Ciência nas escolas e aproximar a nanotecnologia do público em geral. Ao popularizar a ciência, contribuímos para formar uma sociedade mais informada e engajada com as questões científicas e tecnológicas.</p>
                            </div>

                            <div
                                className="flex flex-col items-start justify-start">
                                <p className="text-left text-3xl font-medium text-amber-400 uppercase">PROMOVER</p>
                                <p className="text-left border-b border-amber-400 text-amber-400 font-semibold text-base">a educação científica de qualidade</p>
                                <p className="text-left text-white text-base">A ONANO foi planejada para ser uma plataforma educativa que apresenta os conceitos e fundamentos da nanotecnologia de maneira interdisciplinar e descomplicada. Seu objetivo é enriquecer a formação acadêmica dos participantes, proporcionando uma experiência educacional abrangente e inovadora.</p>
                            </div>
                            <div
                                className="flex flex-col items-start justify-start">
                                <p className="text-left text-3xl font-medium text-amber-400 uppercase">DESENVOLVER</p>
                                <p className="text-left border-b border-amber-400 text-amber-400 font-semibold text-base">habilidades críticas e criativas</p>
                                <p className="text-left text-white text-base max-w-md">A participação em competições científicas promove o desenvolvimento de habilidades essenciais, como pensamento crítico, resolução de problemas, criatividade e inovação, contribuindo para formar futuros cientistas e engenheiros capazes de enfrentar os desafios tecnológicos e sociais do nosso país. Ao introduzir estudantes ao fascinante mundo do nano, a ONANO deseja reforçar a importância da alfabetização científica na educação básica e promover reflexões sobre as relações entre Ciência, Tecnologia, Sociedade e Meio Ambiente (CTSA).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:justify-start flex w-full gap-10 relative z-20 -bottom-12'>
                    <picture className="">
                        <img src="/img-objetivos.webp" className="" alt="" />
                    </picture>
                    <div id="HowItWorks" className="flex items-center justify-center gap-5 max-w-2xl">
                        <div
                            className="flex flex-col gap-8 items-start justify-start text-blue-950 ml-5">
                            <p className="text-left uppercase font-bold text-3xl">COMO FUNCIONARÁ</p>
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

            {/* MOBILE */}
            <div className="relative md:hidden flex flex-col justify-center items-center">
                <div id="ObjectivesAndBenefitsMobile"
                    className="flex items-center justify-center h-56 w-56 rounded-full bg-gray-100 relative -bottom-36 z-50">
                    <h1 className="text-blue-950 font-bold uppercase text-2xl text-center">OBJETIVOS E BENEFÍCIOS</h1>
                </div>
                <div className="relative flex items-center justify-center w-full py-10">
                    <picture className=" w-full relative">
                        <img src="/bg-objetivos-mobile.webp" className="object-cover w-full h-auto relative z-30" alt="" />
                    </picture>
                    <div className="absolute z-50 w-full flex flex-col items-center justify-center gap-10 px-5 top-44">
                        <div
                            className="flex flex-col items-start justify-start gap-3">
                            <p className="text-left text-2xl font-medium text-amber-400 uppercase">DIVULGAR</p>
                            <p className="text-left border-b border-amber-400 text-amber-400 font-semibold text-base">a ciência e popularizar a nanotecnologia</p>
                            <p className="text-left text-white text-base">A realização de eventos nacionais como a ONANO é essencial para divulgar essa área da Ciência nas escolas e aproximar a nanotecnologia do público em geral. Ao popularizar a ciência, contribuímos para formar uma sociedade mais informada e engajada com as questões científicas e tecnológicas.</p>
                        </div>

                        <div
                            className="flex flex-col items-start justify-start gap-3">
                            <p className="text-left text-2xl font-medium text-amber-400 uppercase">PROMOVER</p>
                            <p className="text-left border-b border-amber-400 text-amber-400 font-semibold text-base">a educação científica de qualidade</p>
                            <p className="text-left text-white text-base">A ONANO foi planejada para ser uma plataforma educativa que apresenta os conceitos e fundamentos da nanotecnologia de maneira interdisciplinar e descomplicada. Seu objetivo é enriquecer a formação acadêmica dos participantes, proporcionando uma experiência educacional abrangente e inovadora.</p>
                        </div>
                        <div
                            className="flex flex-col items-start justify-start gap-3">
                            <p className="text-left text-2xl font-medium text-amber-400 uppercase">DESENVOLVER</p>
                            <p className="text-left border-b border-amber-400 text-amber-400 font-semibold text-base">habilidades críticas e criativas</p>
                            <p className="text-left text-white text-base">A participação em competições científicas promove o desenvolvimento de habilidades essenciais, como pensamento crítico, resolução de problemas, criatividade e inovação, contribuindo para formar futuros cientistas e engenheiros capazes de enfrentar os desafios tecnológicos e sociais do nosso país. Ao introduzir estudantes ao fascinante mundo do nano, a ONANO deseja reforçar a importância da alfabetização científica na educação básica e promover reflexões sobre as relações entre Ciência, Tecnologia, Sociedade e Meio Ambiente (CTSA).</p>
                        </div>
                    </div>
                </div>
                <div className='justify-start flex flex-col w-full gap-10 relative z-20 pt-10 pb-20'>
                    <picture id="HowItWorksMobile" className="">
                        <img src="/img-objetivos.webp" className="" alt="" />
                    </picture>
                    <div className="flex items-center justify-center gap-5 px-5">
                        <div
                            className="flex flex-col gap-8 items-start justify-start text-blue-950">
                            <p className="text-left uppercase font-bold text-xl">COMO FUNCIONARÁ</p>
                            <div className="border-l-[7px] border-blue-950 pl-2 flex flex-col gap-4">
                                <p className="text-left text-base ml-3">A OLIMPÍADA NACIONAL DE NANOTECNOLOGIA é </p>
                                <span className="font-bold text-base text-left ml-3">100% digital e totalmente gratuita.</span>
                                <p className="text-left text-base ml-3 ">Cada estudante irá percorrer uma trilha de aprendizagem e aprender gradativamente os conceitos da nanociência e nanotecnologia.</p>
                                <p className="text-left text-base ml-3 ">Todo o conteúdo programático (currículo) da ONANO foi testado em sala de aula por mais de 7 anos e a metodologia que será aplicada garante que ninguém precisa ter conhecimento prévio em nanotecnologia para mandar bem nessa competição.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}