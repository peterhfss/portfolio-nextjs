import Image from "next/image";
import Profile from "../../../public/images/Profile.jpg";

const AboutSection = () =>{
  return(
    <section className="bg-primary h-screen flex justify-center items-center" id="about">
      <div className="flex flex-col lg:w-[1040px] gap-2 px-6 md:pt-12 lg:m-auto lg:py-4 lg:gap-20">
        <h1 className="font-mono text-secundary text-2xl text-right w-full px-4 lg:text-[32px] md:px-8">
          About
        </h1>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-24 lg:justify-center ">
          <div className="w-[60%] mx-auto  md:w-2/5 md:h-2/6 lg:w-[3460px] lg:h-[520px]">
            <Image
              src={Profile}
              alt="Photo"
              className="rounded-2xl w-full h-full"
            />
          </div>
          
          <div className="flex flex-col gap-4 justify-center  md:gap-3 lg:gap-8">
            <p className="text-xs text-primary-700 font-mono md:text-sm">
              Introduce
            </p>
            <h2 className="text-2xl text-[#EFEFFF] w-64">
              Hello! I’m Pedro Henrique
            </h2>
            <p className="text-primary-500 text-xs font-mono leading-6 text-justify lg:text-base">
              As a technology enthusiast, I started to become a web developer full-stack. With more than four years 
              of experience in programming,I have been working on many challenging projects that allow me to improve my skills in many areas, 
              including HTML5, CSS3, JavaScript, TypeScript, and other technologies front-end and back-end. Beyond that, 
              I am constantly searching to learn and adapt to more recent tendencies and the best practices for ensuring my projects 
              remain innovative and relevant.
            </p>
            <button className="text-primary-300 bg-secundary-800 font-mono h-8 w-2/5 rounded hover:bg-secundary-700">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;