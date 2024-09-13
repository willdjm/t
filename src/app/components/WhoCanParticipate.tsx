"use client";

export function WhoCanParticipate() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* Imagem do topo */}
      <picture className="w-full">
        <img src="/img-participar.png" className="w-full" alt="Quem pode participar" />
      </picture>

      {/* Conteúdo principal */}
      <div className="bg-green-900 z-10 w-full flex flex-col items-center justify-center md:gap-16 gap-10 px-4 py-10">
        <p
          id="WhoCanParticipate"
          className="text-white font-bold md:text-4xl text-3xl uppercase max-w-72 text-center"
        >
          QUEM PODE PARTICIPAR
        </p>
        <div className="flex flex-col w-full items-center justify-center gap-3">
          <p className="text-white text-base text-center">A participação é</p>
          <p className="text-white font-bold md:text-4xl text-2xl uppercase text-center">
            TOTALMENTE GRATUITA
          </p>
          <p className="text-white text-base text-center">
            e as inscrições podem ser realizadas em uma das duas categorias:
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:gap-20 gap-10 text-center">
          {/* Categoria 1 */}
          <div className="flex items-end justify-end gap-5">
            <div className="flex flex-col gap-5 md:items-end items-start md:justify-end justify-start text-white md:border-r-[6px] border-r-0 md:border-l-0 border-l-[6px] border-amber-400 md:pr-5 pl-5">
              <p className="md:text-right text-left font-bold md:text-[29px] text-2xl">
                Categoria 1
              </p>
              <p className="md:text-right text-left text-[17px] max-w-[23rem]">
                Estudantes regularmente matriculados do 6º ao 9º ano do{" "}
                <span className="font-bold">Ensino Fundamental</span>.
              </p>
            </div>
          </div>

          {/* Categoria 2 */}
          <div className="flex items-start justify-start gap-5">
            <div className="flex flex-col gap-5 items-start justify-start text-white border-l-[6px] border-amber-400 pl-5">
              <p className="text-left font-bold md:text-[29px] text-2xl">Categoria 2</p>
              <p className="text-left text-[17px] max-w-[23rem]">
                Estudantes regularmente matriculados no{" "}
                <span className="font-bold">Ensino Médio</span> (ou Técnico)*
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center justify-center mb-16">
          <a href="" className="text-white text-[15px] text-center">
            *Desde que não estejam matriculados em algum curso superior.
          </a>
        </div>
      </div>

      {/* Imagem de fundo com link para pré-cadastro */}
      <div className="relative w-full">
        <picture>
          <img src="/img-participar2.png" className="w-full h-auto" alt="Participar" />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center z-30 p-5">
          <a href="/pre-cadastro">
            <picture>
              <img src="/img-inscreva.png" className="max-w-full max-h-full object-contain" alt="Inscreva-se" />
            </picture>
          </a>
        </div>
      </div>
    </div>
  );
}
