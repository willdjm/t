"use client";

export function Programming() {
  return (

    <div className="relative md:flex flex-col justify-start items-center">
      <div
        id="Programming"
        className="md:justify-center items-center flex flex-col md:max-w-6xl w-full pt-14 gap-14"
      >
        <p className="text-blue-950 font-bold md:text-4xl text-3xl uppercase">
          PROGRAMAÇÃO
        </p>
        <p className="text-blue-950 md:text-3xl text-2xl text-center">
          Fique atento as datas importantes:
        </p>
        <div className="flex flex-col md:flex md:flex-row w-full md:items-center md:justify-center md:gap-48 gap-10 text-center md:max-w-3xl px-10 md:px-0">
          <div className="flex items-start justify-start">
            <div className="flex flex-col items-start justify-start text-green-950 border-l-[6px] border-green-950 md:pl-7 pl-2">
              <p className="text-left font-bold text-3xl">Início</p>
              <p className="text-left text-xl text-blue-950">
                das Inscrições:
              </p>
              <p className="text-left font-bold text-2xl text-blue-950">
                12 de Setembro
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start">
            <div className="flex flex-col items-start justify-start text-amber-400 border-l-[6px] border-amber-400 md:pl-7 pl-2">
              <p className="text-left font-bold text-3xl">Fim</p>
              <p className="text-left text-xl text-blue-950">
                das Inscrições:
              </p>
              <p className="text-left font-bold text-2xl text-blue-950">
                12 de Outubro
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
