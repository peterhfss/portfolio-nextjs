import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(){
  try{
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['pedroh.fss@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    return NextResponse.json({data});
    
  }catch(err){
    return NextResponse.json({err});
  }
}