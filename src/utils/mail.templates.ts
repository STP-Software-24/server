import { resolve } from 'path';
import { sendEmail } from '../services/mailer';
import { WorkshopEnum } from './enums/workshop.enums';

async function promiseDelay(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

export async function sendRegisterationEmail(to: string) {
    const subject = 'STP 24 Registration';
    const text = `Dear applicant,\n\nHope this email finds you well.\n\nThank you for being so interested in joining STP and filling the application.\n\nWe are delighted to inform you that you made it to the next phase of the application process which is the interview phase.\n\nStay tuned for a phone call from our team to schedule an interview, the interview will take place at Vspaces, Dokki, Cairo.\n\nGood luck in the interview, and if you have any inquiry do not hesitate to contact us on our Facebook page. We wish you the best.\n\nBest regards\nBoard Team\nSTP'24\nhttps://www.stp-org.com/`;
    await sendEmail(to, subject, text);
}

export async function sendWorkshopRegisterationEmail(
    to: string,
    workshop: string,
    uniqueCode: string
) {
    const subject = `STP'24 | Workshops Registration`;
    const text = `Dear Applicant,

        Greetings from STP! We hope this email finds you well.
        
        Thank you for your interest in Joining STP as a participant in our workshops and applying for ${workshop} Workshop.
        We have received your application and are currently reviewing it. You will hear from us within two weeks to schedule the interview date.
        
        Please do not hesitate to contact us through our email if you have any questions or concerns. We are looking forward to hearing from you.
        
        Please use the following code to register for interviews ${uniqueCode}
        Sincerely,
        STP Team`;
    await sendEmail(to, subject, text);
}

export async function sendMacathonRegisterationEmail(to: string) {
    const subject = `STP'24 | MACATHON 5.0 Registration`;
    const text =
        `Dear competitor,

        "If you're a true warrior, competition doesn't scare you. It makes you better."

        Andrew Whitworth
        

        Greetings from STP! We hope this email finds you well.
        
        Thank you for your interest in Joining STP as a competitor in our competition MACATHON 5.0.
        We have received your application and are currently reviewing it. You will hear from us within two weeks to schedule the interview date.
        
        Please do not hesitate to contact us through our email if you have any questions or concerns. We are looking forward to hearing from you.
        
        Sincerely,
        STP Team`;
    await sendEmail(to, subject, text);
}

export async function sendWorkshopTestEmail(
    to: string,
) {
    const subject = `STP'24 | Workshops Test`;
    const text = 
    `Dear applicant,

    Hope this email finds you well.

    Thank you for you patience and your willingness to complete your registration for the workshop with STP.

    Please fill the following form in order to continue to the next phase:
    https://docs.google.com/forms/d/e/1FAIpQLSf9ypCS2SoFBry8nUtzPhxDE9FN-jkU6ucUd0SbrZZKfx5X2Q/viewform
    Important note: The purpose of this test(form) is to measure if you are gonna have an advantage from the workshop or not. Please make the answers to the questions to be based on your knowledge only

    Best regards,
    STP team
    `;
    await sendEmail(to, subject, text);
    promiseDelay(2000);
}

export async function sendNewWorkshopTestEmail(
    to: string,
) {
    const subject = `STP'24 | Workshops Test`;
    const text = `
    Dear applicant,

    Hope this email finds you well.
    
    Thank you for your interest in joining STP in our workshops.
    
    Please fill the following form in order to continue to the interviewing phase:
    https://docs.google.com/forms/d/e/1FAIpQLSf9ypCS2SoFBry8nUtzPhxDE9FN-jkU6ucUd0SbrZZKfx5X2Q/formResponse
    Important note: The purpose of this test(form) is to measure if you are gonna have an advantage from the workshop or not. Please make sure that the answers to the questions to be based on your knowledge only
    
    Please If you have any questions or concerns do not hesitate to reply to this email. We look forward to receiving your registration soon.
    
    Best regards,
    STP team
    `;
    await sendEmail(to, subject, text);
    promiseDelay(2000);
}
