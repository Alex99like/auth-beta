import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import authMailConfig from "./auth-mail.config"

export const { 
  handlers: { GET, POST }, 
  auth 
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: '124312fdsfwedaswaewfddsc',
  pages: {
    verifyRequest: '/verify-request'
  },
  ...authMailConfig,
  //...authConfig,
})
  
  