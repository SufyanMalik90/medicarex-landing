import Navbar from "./Navbar";
// import { HeroMockup } from "../assets/export";

const Hero = () => {
  return (
    <div className="w-full bg-image h-auto xl:h-auto px-6 md:px-8 lg:px-20 xl:px-28">
      <Navbar />
      <div className="w-full h-auto flex flex-col gap-4 my-10 justify-start items-start lg:items-center">
        <div className="w-auto flex gap-3 justify-center items-center">
          <span className="w-8 h-1 bg-[#0089FB]"></span>
          <span className="text-white text-md font-medium">
            Welcome to MedicareX:
          </span>
        </div>

        <h1 className="text-[35px] lg:text-[65px] font-extrabold text-white leading-tight tracking-tight">
        Your Personalized
          <br /> Healthcare Solution
        </h1>

        <span className="text-sm lg:text-center font-normal text-[#E6E6E6] tracking-wider">
        Revolutionize your healthcare experience. MedicareX empowers
          <br />
            you to take control of your health, from finding the right
          <br />doctor to managing your medical history.
        </span>
        <div className="flex justify-center gap-0 !m-0">

        <img src="/mockup.png" alt="hero-mockup" className="h-[70vh]"/>
        <img src="/mockup2.png" alt="hero-mockup" className="h-[70vh]"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
