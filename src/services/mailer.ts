import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const localTransporterConfig = {
    host: 'localhost',
    port: 1025,
};


async function promiseDelay(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}


const remoteTransporterConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'stp24.official@gmail.com',
        pass: process.env.MAIL_PASSWORD,
    }
};

const transporter = nodemailer.createTransport(remoteTransporterConfig);


export async function sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
        from: 'STP 24 <stp24.official@gmail.com>',
        to,
        subject,
        text,
    }
    console.log(`Email to ${to}`);
    const info = await transporter.sendMail(mailOptions);
    await promiseDelay(2000);
}