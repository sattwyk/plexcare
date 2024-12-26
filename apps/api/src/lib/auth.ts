import { db } from "db";
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { betterAuth } from "better-auth"

export const auth = betterAuth({
  database: drizzleAdapter(db,{
    provider:'sqlite'
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID! || "1",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! || "sadasd",
      redirectUri: process.env.GOOGLE_REDIRECT_URI! || "/auth/google/callback"
    }
  }
})
