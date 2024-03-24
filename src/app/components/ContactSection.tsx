import Form from "./Form";

const ContactSection = () =>{
  return(
    <section className="h-full bg-tertiary px-48 py-32 flex flex-col justify-start gap-10" id="contact">
       <h1 className="font-mono text-secundary text-4xl">
        Contact
      </h1>
      <div className="flex justify-evenly items-center mx-auto my-0 w-full h-full p-8">
        <h2 className="text-5xl/normal w-[480px] h-auto font-mono font-bold text-primary-600">
          Let&apos;s start a project together
        </h2>
        <Form />
      </div>
      
    </section>
  )
}

export default ContactSection;