// First install nodemailer:
// npm install nodemailer @types/nodemailer

// src/services/email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        // Create transporter with your email configuration
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',  // Replace with your SMTP host
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.EMAIL_USER || 'formationnettn@gmail.com',
                pass: process.env.EMAIL_PASSWORD || 'njcdnvxctbutqywp'
            }
        });
    }

    async sendWelcomeEmail(to: string, subject: string, html: string): Promise<void> {
        const mailOptions = {
            from: "formationnettn@gmail.com",
            to: to,
            subject: subject,
            html: html
        };

        try {
            await this.transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Error sending welcome email:', error);
            throw new Error('Failed to send welcome email');
        }
    }

}