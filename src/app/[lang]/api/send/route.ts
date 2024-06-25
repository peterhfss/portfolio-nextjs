import { EmailTemplate } from "@/app/components/email-template";
import { NextRequest,NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(req:NextRequest){

  const body = await req.json();
  const { firstName, email, service, message } = body;

  try{
      const { data } = await resend.emails.send({
      from: 'Pedroh.dev Portfolio <contact@pedrohdev.com>',
      to: ['pedroh.fss@gmail.com'],
      subject: 'Message from Portfolio',
      react: EmailTemplate({firstName, email, service, message}),
    });

    return NextResponse.json({data});
    
  }catch(error){
    return NextResponse.json({error});
  }
}