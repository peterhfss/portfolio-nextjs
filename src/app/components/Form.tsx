const Form = () =>{
  return(
    <form action="" className="flex flex-col gap-6 text-base text-white ">
      <label htmlFor="name" className="flex gap-8">
        <span>
          01
        </span>
        What&apos;s your name?
      </label>

      <input type="text" className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors"/>

      <label htmlFor="email" className="flex gap-8">
        <span>
          02
        </span>
        What&apos;s your email?
      </label>

      <input type="text" className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors" />

      <label htmlFor="services" className="flex gap-8">
        <span>
          03
        </span>
          What services are you looking for?
      </label>

      <input type="text" className="bg-transparent border-b-2 border-tertiary-800 focus:outline-none focus:border-secundary transition-colors"/>

      <label htmlFor="message" className="flex gap-8">
        <span>
          04
        </span>
        Your message
      </label>

      <textarea className="bg-transparent resize-y max-h-24 border-b-2 p-0 border-tertiary-800 focus:outline-none focus:border-secundary h-auto transition-colors" />

      <button className="w-24 h-9 bg-secundary-800 relative left-3/4 text-sm rounded p-2 hover:bg-secundary hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-secundary-200">
        Send it!
      </button>
    </form>
  )
}

export default Form