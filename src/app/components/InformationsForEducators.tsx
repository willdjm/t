"use client"

export function InformationsForEducators() {

    return (

        <div id="InformationsForEducators"
            className="flex flex-col justify-center items-center w-full px-4 pt-32 md:pt-20">
            <div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full gap-10 pb-20'>
                <h3 className="text-amber-400 font-bold md:text-4xl text-2xl uppercase text-center">INFORMAÇÕES PARA EDUCADORES</h3>
                <div className="flex flex-col w-full items-center justify-center gap-10 text-center">
                    <div>
                        <p className="text-center text-lg">Queremos convidá-lo(a) a se cadastrar e aproveitar uma série de
                        </p>
                        <span className="font-bold text-lg"> benefícios exclusivos para você e seus alunos.</span>
                    </div>
                    <div>
                        <p className="text-center max-w-2xl text-lg">Nossa missão é promover o ensino da nanotecnologia nas
                            escolas e
                            <span className="font-bold"> capacitar os educadores</span> para que possam explorar esse campo
                            fascinante de forma eficiente e inspiradora.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-start justify-start text-blue-950 pt-5">
                    <div className="flex items-start justify-start md:gap-10 gap-4">
                        <div className="flex items-center justify-center">
                            <picture className="md:h-24 md:w-24 h-16 w-16 bg-amber-400 rounded-full flex items-center justify-center">
                                <img src="/icon-cursocapacitacao.webp" className="md:w-14 md:h-14 h-8 w-8" alt="" />
                            </picture>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <p className="text-left font-bold text-base">CURSOS DE CAPACITAÇÃO:</p>
                            <p className="text-left text-base max-w-sm">Participe de cursos online focados no ensino da
                                nanotecnologia, elaborados
                                pelo Prof.
                                Delmárcio Gomes e especialistas da área. </p>
                            <p className="text-left text-base max-w-sm">Você terá acesso a materiais didáticos, planos de
                                aula e atividades
                                práticas que podem ser
                                facilmente integrados ao currículo escolar.</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start md:gap-10 gap-4">
                        <div className="flex items-center justify-center">
                            <picture className="md:h-24 md:w-24 h-16 w-16 bg-amber-400 rounded-full flex items-center justify-center">
                                <img src="/icon-livecomespecialistas.webp" className="md:w-14 md:h-14 h-8 w-8" alt="" />
                            </picture>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <p className="text-left font-bold text-base">LIVE COM ESPECIALISTAS:</p>
                            <p className="text-left text-base max-w-sm w-full">Oportunidade de assistir a lives exclusivas
                                com profissionais da indústria,
                                pesquisadores nacionais renomados e alunos de pós-graduação que estão no ramo da pesquisa da
                                nanotecnologia.</p>
                            <p className="text-left text-base">Essas sessões oferecerão insights valiosos e responderão a
                                perguntas
                                relevantes sobre o o tema.</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start md:gap-10 gap-4">
                        <div className="flex items-center justify-center">
                            <picture className="md:h-24 md:w-24 h-16 w-16 bg-amber-400 rounded-full flex items-center justify-center">
                                <img src="/icon-redescontatos.webp" className="md:w-14 md:h-14 h-8 w-8" alt="" />
                            </picture>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <p className="text-left font-bold text-base">REDE DE CONTATOS:</p>
                            <p className="text-left text-base max-w-sm">Conecte-se com outros educadores, pesquisadores e
                                profissionais da
                                indústria.</p>
                            <p className="text-left text-base max-w-sm">Amplie sua rede de contatos, trocando experiências e
                                ideias para enriquecer
                                seu ensino e o aprendizado de seus alunos.</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start md:gap-10 gap-4">
                        <div className="flex items-center justify-center">
                            <picture className="md:h-24 md:w-24 h-16 w-16 bg-amber-400 rounded-full flex items-center justify-center">
                                <img src="/icon-reconhecimento.webp" className="md:w-14 md:h-14 h-8 w-8" alt="" />
                            </picture>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start">
                            <p className="text-left font-bold text-base">RECONHECIMENTO E CERTIFICAÇÃO:</p>
                            <p className="text-left text-base">Ao participar dos cursos de capacitação, você receberá
                                certificados que
                                atestam sua participação e dedicação ao ensino da nanotecnologia.</p>
                            <p className="text-left text-base">Esses certificados podem enriquecer seu currículo e abrir
                                portas para novas
                                oportunidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}