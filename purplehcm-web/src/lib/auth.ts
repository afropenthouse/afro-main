import { NextAuthOptions } from "next-auth";

import AzureADProvider from "next-auth/providers/azure-ad";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      // tenantId: process.env.AZURE_AD_TENANT_ID as string,
      // authorization: { params: { scope: "openid profile user.Read email" } },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    jwt: async ({ user, token, trigger, session,account }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      console.log(user, token, session, account)
      return { ...token, ...user };
    },
  },
};

export default authOptions