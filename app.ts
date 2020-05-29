import {Application} from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

import config from "./utils/config.ts"
import router from "./routers/auth_router.ts";

const app = new Application({port: config.PORT});

app.use("/api/auth", router);

app.get("/", (ctx) => {
    return {sucess: true, message: "Welcome to DenoLand!"}
});


await app.run();
