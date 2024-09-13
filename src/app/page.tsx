import { About } from "./components/About";
import { BannerHome } from "./components/BannerHome";
import { Contact } from "./components/Contatct";
import { Depositions } from "./components/Depositions";
import { Footer } from "./components/Footer";
import { FrequentlyQuestions } from "./components/FrequentlyQuestions";
import { HowItWorks } from "./components/HowItWorks";
import { HowToRegister } from "./components/HowToRegister";
import { InformationsForEducators } from "./components/InformationsForEducators";
import { ObjectivesAndBenefits } from "./components/ObjectivesAndBenefits";
import { OrientationsGeneral } from "./components/OrientationsGeneral";
import { OurPartnersAndSponsors } from "./components/OurPartnersAndSponsors";
import { Programming } from "./components/Programming";
import { RulesAndRegulations } from "./components/RulesAndRegulations";
import { WhoCanParticipate } from "./components/WhoCanParticipate";

export default function Home() {
  return (
<main>
<div className="md:flex md:flex-row flex flex-col items-center justify-center py-20 gap-10">
  
<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">

<a href="/pre-cadastro" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
  Pré-Cadastro
</a>
</div>

<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">

<a href="/email-aluno" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
  E-mail Aluno
</a>
</div>

<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">

<a href="/email-prof" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
E-mail Professor
</a>
</div>

<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">

<a href="/cadastro-aluno" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
  Cadastro Aluno
</a>
</div>

<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">

<a href="/cadastro-professor" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
  Cadastro Professor
</a>
</div>

<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">

<a href="/conteudo-aluno" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
  Conteudo Aluno
</a>
</div>

<div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">
<a href="/conteudo-professor" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
  Conteudo Professor
</a>
</div>
</div>

<BannerHome/>
<About/>

<ObjectivesAndBenefits/>
<HowItWorks/>
<OrientationsGeneral/>


<Programming/>


<WhoCanParticipate/>

<InformationsForEducators/>
<HowToRegister/>
<RulesAndRegulations/>
<Depositions/>


<FrequentlyQuestions/>

        <OurPartnersAndSponsors/>
        <Contact/>
        <Footer/>
</main>
  );
}
