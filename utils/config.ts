import "https://deno.land/x/dotenv/mod.ts";
const config = {
    "PORT": Deno.env.get("PORT") || 8000,
    "DB_URI": Deno.env.get("DB_URI") || "mongodb://localhost:27017",
    "DB": Deno.env.get("DB") || "deno-auth",
    "JWT_KEY": Deno.env.get("JWT_KEY") || "hello1234322432"
};
console.log(config);

export default config;