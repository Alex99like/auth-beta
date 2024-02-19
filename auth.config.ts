import Google from "next-auth/providers/google"
import Yandex from "next-auth/providers/yandex"

import type { NextAuthConfig } from "next-auth"

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
  ],
} satisfies NextAuthConfig