import { Form } from "../form";
import  { getDictionaryUseClient } from '@/dictionaries//default-dictionary-use-client';
import { Locale } from '@/config/i18n.config'

interface IContactProps{
  lang: Locale;
}

export const Contact = ({lang}:IContactProps) =>{

  const dict = getDictionaryUseClient(lang)

  return(
    <section className="bg-tertiary h-screen py-28 px-6 lg:px-32 lg:py-36 snap-start" id="contact">
          <div className="flex flex-col items-center gap-4">
            <div className="w-full">
              <h1 className="font-mono text-secundary text-2xl  lg:text-[32px] w-full text-left">
                {dict.contact.title}
              </h1>
            </div>
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32 w-full lg:justify-center lg:px-9">
              <h2 className="text-2xl font-mono font-bold text-primary-600 text-center lg:text-6xl lg:w-[640px] lg:text-left">
                {dict.contact.subtitle}
              </h2>
              <Form lang={lang}/>
              
            </div>
          </div>
    </section>
    
    
  )
}