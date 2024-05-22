import Form from "./Form";

const ContactSection = () =>{
  return(
    <section className="bg-tertiary w-full" id="contact">
      <div className="flex flex-col p-6 items-center gap-4">
        <div className="w-full">
          <h1 className="font-mono text-secundary text-[32px]">
            Contact
          </h1>
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <h2 className="text-2xl/normal font-mono font-bold text-primary-600 text-center">
            Let&apos;s start a project together
          </h2>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default ContactSection;