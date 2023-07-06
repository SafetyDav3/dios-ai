// Route handler for Next.js 13.2 and above
// ref: https://next-auth.js.org/configuration/initialization#route-handlers-app

import NextAuth from "next-auth"

const handler = NextAuth({
  ...
})

export { handler as GET, handler as POST }