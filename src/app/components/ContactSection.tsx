import Form from "./Form";

const ContactSection = () =>{
  return(
    <section className="bg-tertiary h-screen py-28 px-6 lg:px-32 lg:py-36" id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full">
          <h1 className="font-mono text-secundary text-2xl  lg:text-[32px] w-full text-left">
            Contact
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32 w-full lg:justify-center">
          <h2 className="text-2xl font-mono font-bold text-primary-600 text-center lg:text-5xl lg:w-[462px] lg:text-left">
            Let&apos;s start a project together
          </h2>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default ContactSection;