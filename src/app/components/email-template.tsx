import * as React from 'react';
import { Body, Container, Head, Html, Preview, Text, Tailwind , Section} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  service: string;
  message: string;
}

export const EmailTemplate = ({firstName, email, service, message}:EmailTemplateProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Portfolio Message</Preview>
      <Body className='bg-white my-auto mx-auto font-mono px-2'>
        <Container className='border border-solid border-gray-200 rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
          <Section className='m-auto h-auto'>
            <Text>
              From : {firstName} | {email}
            </Text>
            <Text>
              Subject : {service}
            </Text>
            <Text>
            {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
  
);