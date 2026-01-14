import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, propertyAddress, message } = body;

        // Validations
        if (!firstName || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Transporter setup
        // Ideally use environment variables for user/pass
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Email options
        const mailOptions = {
            // We set the "Display Name" to the visitor's email so it looks like it's coming from them in your inbox list.
            // The part inside < > MUST be your authenticated email to pass Gmail's security checks.
            from: `"${email}" <${process.env.GMAIL_USER}>`,

            // "To" is where you want to receive the email (your own address)
            to: process.env.GMAIL_USER,

            // "Reply-To" ensures that when you click reply, it goes to the visitor's email
            replyTo: email,

            subject: `New Evaluation Request from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #cfae7d;">New Evaluation Request</h2>
                    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Property Address:</strong> ${propertyAddress || 'N/A'}</p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);

        // Debug logging to help identify the issue
        console.log('--- Debug Info ---');
        console.log('GMAIL_USER present:', !!process.env.GMAIL_USER);
        console.log('GMAIL_APP_PASSWORD present:', !!process.env.GMAIL_APP_PASSWORD);
        if (error instanceof Error) {
            console.log('Error message:', error.message);
            console.log('Error stack:', error.stack);
        }
        console.log('------------------');

        return NextResponse.json({ error: 'Failed to send email', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}
