import { Locale } from "@/config/i18n.config";
interface IFormProps{
  lang: Locale; 
}

const Form = ({lang}: IFormProps) =>{

   const handleSendNewMessage =  async () =>{ 
      await fetch(`${lang}/api/send`,{method:"POST"});
  }

  return(
    <form action="" className="flex flex-col gap-8 text-base text-white lg:gap-6 h-auto">
      <label htmlFor="name" className="flex gap-8">
        <span>01</span>
        {lang === 'en-US' ? "What's your name?" : 'Qual seu nome?'}
      </label>

      <input type="text" className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors"/>

      <label htmlFor="email" className="flex gap-8">
        <span>02</span>
        {lang === 'en-US' ? "What's your email?" : 'Qual seu email?'}
      </label>

      <input type="text"  className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors" />

      <label htmlFor="services" className="flex gap-8">
        <span>03</span>
        {lang === 'en-US' ? 'What services are you looking for?' : 'Quais  serviços você esta buscando?'}
      </label>

      <input type="text" className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors"/>

      <label htmlFor="message" className="flex gap-8">
        <span>04</span>
        {lang === 'en-US' ? 'Your message' : 'Sua mensagem'}
      </label>

      <textarea rows={1} className="bg-transparent resize-y border-b-2 p-1 border-tertiary-800 focus:outline-none focus:border-secundary h-auto transition-colors" />

      <div className="flex w-full justify-end">
        <button onClick={handleSendNewMessage} className="w-24 h-9 bg-secundary-800 text-sm rounded p-2 hover:bg-secundary hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-secundary-200">
          {lang === 'en-US' ? 'Send it!' : 'Enviar!'}  
        </button>
      </div>
      
    </form>
  )
}

export default Form