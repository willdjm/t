"use client"

export function ObjectivesAndBenefits() {

    return (

        <>
            <div id="Contact" className="relative bg-Teal-600 z-20">
                {/* Div vermelha */}
                <div className="w-full h-40"></div>
                <div className="relative">
                    {/* Imagem centralizada e sobrepondo a linha entre vermelho e amarelo */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center">
                        <picture>
                            <img src="/img-objetivos.png" className="px-10 md:px-0" alt="" />
                        </picture>
                    </div>
                </div>
                <div className="w-full items-center justify-center bg-blue-950 h-44"></div>

            </div>

            <div className=" w-full md:flex md:flex-row flex flex-col items-center bg-blue-950 justify-center px-4">
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
                <div>
                    <picture>
                        <img src="/img-objetivos3.png" className="" alt="" />
                    </picture>
                </div>
            </div>
            <picture className="w-full">
                <img src="/img-objetivos2.png" className="w-full z-20 relative" alt="" />
            </picture>

        </>
    );
}