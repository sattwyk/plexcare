import { betterAuth } from "better-auth"

export const auth = betterAuth({
  secret: process.env.SECRET,
  emailAndPassword: {
    enabled: true
  },
  database: {
    type: 'sqlite',
    connection: {
      url: process.env.DATABASE_URL,
      authToken: process.env.DATABASE_AUTH_TOKEN
    }
  }
})