import Image from "next/image";
import Profile from "../../../public/images/Profile.jpg";

const AboutSection = () =>{
  return(
    <section className="h-screen bg-primary px-60 py-24" id="about">
      <div className="flex flex-col items-end gap-14">
        <h1 className="font-mono text-secundary text-4xl">
          About
        </h1>
        <div className="flex gap-36 px-56">
          <Image
            src={Profile}
            alt="Photo"
            className="rounded-xl w-1/3 contrast-[75%]"
          />
          <div className="flex flex-col items-start">
            <p className="text-xs text-primary-700 font-mono pb-9">
              Introduce
            </p>
            <h2 className="text-2xl text-[#EFEFFF] w-60 pb-5">
              Hello! I’m Pedro Henrique
            </h2>
            <p className="text-primary-500 text-xs font-mono leading-5 w-80 pb-10">
              As a technology enthusiast, I started to become a web developer full-stack. With more than four years 
              of experience in programming,I have been working on many challenging projects that allow me to improve my skills in many areas, 
              including HTML5, CSS3, JavaScript, TypeScript, and other technologies front-end and back-end. Beyond that, 
              I am constantly searching to learn and adapt to more recent tendencies and the best practices for ensuring my projects 
              remain innovative and relevant.
            </p>
            <button className="p-2 text-primary-300 bg-secundary-800 rounded font-mono hover:bg-secundary-700 w-32">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;