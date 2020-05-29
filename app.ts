import {Application} from "./deps.ts";

import config from "./utils/config.ts"
import router from "./routers/auth_router.ts";
const port = parseInt(config.PORT.toString());  // config.PORT is of the type string|number, so converting it to string, then number
const app = new Application({port: port});

app.use("/api/auth", router);

app.get("/", (ctx) => {
    return {success: true, message: "Welcome to DenoLand!"}
});

await app.run();
