
import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema'

const client = createClient({url : process.env.DATABASE_URL! || "http://localhost:8080",});   

export const db = drizzle(client,{schema});
