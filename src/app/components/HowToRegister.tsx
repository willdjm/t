"use client"

export function HowToRegister() {

    return (

        <>
            <div id="HowToRegister"
                className="hidden md:flex flex-col justify-center items-center w-full">
                <div className="relative flex items-center justify-start w-full">
                    <picture className=" w-full relative">
                        <img src="/bg-informacoes.webp" className="w-full h-auto relative" alt="" />
                    </picture>
                    <div className="absolute -top-5 z-20 flex">
                        <picture className="w-full relative">
                            <img src="/img-informacoes.webp" className="w-full h-auto relative" alt="" />
                        </picture>
                        <div
                            className="absolute top-20 z-20 w-full flex flex-col items-center justify-center max-w-6xl gap-5 pr-3">
                            <h3 className="text-black font-bold uppercase text-xl text-center">Como se cadastrar?</h3>
                            <p className="text-black max-w-md text-base text-center">Para se inscrever, basta clicar no botão
                                abaixo e
                                preencher o formulário com suas informações.</p>
                            <p className="text-black max-w-[30rem] text-base text-center">Nossa equipe entrará em contato com
                                você para
                                fornecer mais detalhes sobre os cursos e eventos disponíveis.
                            </p>
                            <button
                                className="py-2 px-6 font-semibold bg-green-900 text-white rounded-xl text-base text-center">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfzakKCipVM9q33nUQLI25IMSS4nUH1kUjmDyxCbU2K82VCA/viewform"
                                    target="_blank">QUERO ME CADASTRAR</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex justify-center items-center relative">
                <picture>
                    <img src="/bg-informacoes-mobile.webp" className="" alt="" />
                </picture>
                <div className="absolute z-20 w-full flex flex-col items-center justify-center gap-4 px-4 top-10">
                    <h3 className="text-black font-bold uppercase text-xl text-center">Como se cadastrar?</h3>
                    <p className="text-black text-base text-center">Para se inscrever, basta clicar no botão
                        abaixo e
                        preencher o formulário com suas informações.</p>
                    <p className="text-black text-base text-center">Nossa equipe entrará em contato com
                        você para
                        fornecer mais detalhes sobre os cursos e eventos disponíveis.
                    </p>
                    <button
                        className="py-2 px-6 font-semibold bg-green-900 text-white rounded-xl text-base text-center">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfzakKCipVM9q33nUQLI25IMSS4nUH1kUjmDyxCbU2K82VCA/viewform"
                            target="_blank">QUERO ME CADASTRAR</a>
                    </button>
                </div>
            </div>
        </>
    );
}