import NextAuth from "next-auth"
import authConfig from "@/auth.config"

const { auth: middleware } = NextAuth(authConfig)


export default middleware((req) => {
  // req.auth
  console.log(req.auth?.user)

  return 
})


// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}