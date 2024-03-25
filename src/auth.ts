// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import google from "next-auth/providers/google";

// import CredentialsProvider from "next-auth/providers/credentials";

// export const { handlers, auth, signIn, signOut } = NextAuth((req) => {
//   if (req) {
//     console.log(req);
//   }
//   return { providers: [google] };
// });

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [GitHub],
});
