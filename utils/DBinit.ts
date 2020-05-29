import {MongoClient} from "https://deno.land/x/mongo@v0.7.0/mod.ts";
import config from "./config.ts"


const client = new MongoClient();
client.connectWithUri(config.DB_URI);
const db = client.database(config.DB);
export default db;