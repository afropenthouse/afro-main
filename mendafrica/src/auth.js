import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter";

import db from "./lib/db";
import authConfig from "./auth.config";
// import { getUserById } from "./data/user";
import { getUserById } from "./data/user";
// import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update
} = NextAuth({
  // debug: true,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async session({ token, session }) {

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }


      if (session.user) {
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.isOAuth = token.isOAuth;
        session.user.role = token.role;
        session.user.status = token.status;
        session.user.name = token.name
      }

      return session;
    },
    async jwt({ token, trigger }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(
        existingUser.id
      );

      token.isOAuth = !!existingAccount;
      token.firstName = existingUser.firstName;
      token.lastName = existingUser.lastName;
      token.email = existingUser.email;
      token.image = existingUser.image;
      token.role = existingUser.role;
      token.status = existingUser.status;
      token.name = existingUser.name;

      
      if (trigger === "update") {
        token.email = session.email;
        token.image = session.image;
        token.firstName = this.session.firstName;
    }

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
