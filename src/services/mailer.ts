import nodemailer from 'nodemailer';



const localTransporterConfig = {
    host: 'localhost',
    port: 1025,
};

// suludqykgbhoqlon


const remoteTransporterConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'stp24.official@gmail.com',
        pass: 'suludqykgbhoqlon'
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
}