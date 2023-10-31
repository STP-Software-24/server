import { sendEmail } from '../services/mailer';

export async function sendRegisterationEmail(to: string) {
    const subject = 'STP 24 Registration';
    const text = `Dear applicant,\n\nHope this email finds you well.\n\nThank you for being so interested in joining STP and filling the application.\n\nWe are delighted to inform you that you made it to the next phase of the application process which is the interview phase.\n\nStay tuned for a phone call from our team to schedule an interview, the interview will take place at Vspaces, Dokki, Cairo.\n\nGood luck in the interview, and if you have any inquiry do not hesitate to contact us on our Facebook page. We wish you the best.\n\nBest regards\nBoard Team\nSTP'24\nhttps://www.stp-org.com/`;
    await sendEmail(to, subject, text);
}

export async function sendWorkshopRegisterationEmail(to: string) {
    const subject = `STP'24 | Workshops Registration`;
    const text =
        `Dear Applicant,
        Greetings from STP! We hope this email finds you well.
        
        
        Thank you for your interest in Joining STP as a participant in our workshops and applying for (Name of the workshop) Workshop.
        We have received your application and are currently reviewing it. You will hear from us within two weeks to schedule the interview date.
        
        Please do not hesitate to contact us through our email if you have any questions or concerns. We are looking forward to hearing from you.
        
        Sincerely,
        STP Team`;
    await sendEmail(to, subject, text);
}

export async function sendMacathonRegisterationEmail(to: string) {
    const subject = 'STP 24 Macathon Registeration';
    const text =
        'Thanks for Registering for the MAcathon with us, you will hear from us soon';
    await sendEmail(to, subject, text);
}
