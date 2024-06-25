import { Locale } from "@/config/i18n.config";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import  useAutosizeTextArea  from "../..//hooks/useAutosizeTextArea";
import { toast } from "sonner";
interface IFormProps{
  lang: Locale; 
}

const defaultFormData = {
  firstName: "",
  email: "",
  service: "",
  message: "",
}

const Form = ({lang}: IFormProps) =>{

  const [ form, setForm ] = useState(defaultFormData);
  const { firstName, email, service, message } = form;
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (event : ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) =>{
    setForm((prevState) => ({
      ...prevState,
      [event.target.id]:event.target.value,
    }));
    const val = event.target?.value;

    setValue(val);
  }

   const handleSubmit =  async (event: FormEvent) =>{ 
      event.preventDefault();
      
      // verification for email and message fields are not empty
      if(!form.email || !form.message){
        console.info("Email and message are required fields");
        return;
      }

      try{
        const response = await fetch(`${lang}/api/send`,{
          method:"POST",
          body:JSON.stringify({
            firstName:form.firstName,
            email: form.email,
            service: form.service,
            message:form.message,
          })
        });

        if(response.ok){
          toast.success("Email Sent Successfully!");
          setForm(defaultFormData);
        } else{
          toast.error("Email Sent Failed. Please try again");
        }
      } catch(error){
        toast.error(`Error sending email: ${error}`);
      }
  }

  return(
    <form action="" autoComplete="off" onSubmit={handleSubmit} className="flex flex-col gap-8 text-base text-white lg:gap-6 h-auto">
      <label htmlFor="name" className="flex gap-8">
        <span>01</span>
        {lang === 'en-US' ? "What's your name?" : 'Qual seu nome?'}
      </label>

      <input type="text" id="firstName" value={firstName} required onChange={handleChange} className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors"/>

      <label htmlFor="email" className="flex gap-8">
        <span>02</span>
        {lang === 'en-US' ? "What's your email?" : 'Qual seu email?'}
      </label>

      <input type="email" id="email" value={email} required  onChange={handleChange}  className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors" />

      <label htmlFor="services" className="flex gap-8">
        <span>03</span>
        {lang === 'en-US' ? 'What services are you looking for?' : 'Quais  serviços você esta buscando?'}
      </label>

      <input type="text" id="service" value={service} required   onChange={handleChange}  className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors"/>

      <label htmlFor="message" className="flex gap-8">
        <span>04</span>
        {lang === 'en-US' ? 'Your message' : 'Sua mensagem'}
      </label>

      <textarea rows={1} id="message" ref={textAreaRef} value={message} required  onChange={handleChange} maxLength={200} className="bg-transparent resize-y border-b-2 p-1 border-tertiary-800 focus:outline-none focus:border-secundary h-auto transition-colors" />

      <div className="flex w-full justify-end">
        <button type="submit" className="w-24 h-9 :focus-visible bg-secundary-800 text-sm  rounded p-2 hover:bg-secundary hover:text-primary-900 focus:outline-none">
          {lang === 'en-US' ? 'Send it!' : 'Enviar!'}  
        </button>
      </div>
      
    </form>
  )
}

export default Form