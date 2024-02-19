import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"
import EmailProvider from 'next-auth/providers/nodemailer';

import type { NextAuthConfig } from 'next-auth'
import { sendVerificationRequest } from './lib/mails/verify';

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      },
      from: 'aleksievisa@gmail.com',
      sendVerificationRequest: sendVerificationRequest
    }),
  ]
} satisfies NextAuthConfig 
