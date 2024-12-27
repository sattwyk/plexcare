import { db } from "db";
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { betterAuth } from "better-auth"

export const auth = betterAuth({
  database: drizzleAdapter(db,{
    provider:'sqlite'
  }),
  socialProviders: {
    google: {
      clientId: "1",
      clientSecret: "sadasd",
      redirectURI: 'http://localhost:8787/api/auth/google/callback'
    }
  }
})
