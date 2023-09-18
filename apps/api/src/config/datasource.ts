import { DataSource } from "typeorm";

export const datasoruce = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
})