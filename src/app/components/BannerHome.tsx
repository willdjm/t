import { Navbar } from "./Navbar";

export const BannerHome = () => {
  return (
    <div className="relative w-full min-h-screen md:h-auto overflow-hidden">
      <picture className="relative w-full h-full">
        {/* Imagem de desktop */}
        <img
          src="/bannerHome.webp"
          className="w-full h-full hidden md:block object-cover"
          alt="Background"
        />
        {/* Imagem de mobile */}
        <img
          src="/bannerHomeMobile.png"
          className="w-full h-full block md:hidden object-cover"
          alt="Background"
        />
      </picture>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-start text-white z-40">
        <picture className="flex justify-center items-center w-full">
          <img
            src="/logobanner.png"
            className="hidden md:block pt-20"
            alt="Logo"
          />
        </picture>
      </div>
    </div>
  );
}
