import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(){
  try{
      const data = await resend.emails.send({
      from: 'contact@pedrohdev.com',
      to: ['pedroh.fss@gmail.com'],
      subject: 'Create portfolio',
      react: EmailTemplate({}) as React.ReactElement,
    });

    return NextResponse.json({data});
    
  }catch(err){
    return NextResponse.json({err});
  }
}