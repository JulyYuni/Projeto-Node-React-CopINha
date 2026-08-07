import { PrismaPg } from "@prisma/adapter-pg";
 
import { env } from "../env/index.js";
import { PrismaClient } from "../../@types/prisma/client.js";

const connectionString = `${env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})
export const prisma = new PrismaClient({adapter})