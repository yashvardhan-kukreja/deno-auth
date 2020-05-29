import {Application} from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

import config from "./utils/config.ts"

const app = new Application({port: config.PORT});

app.use("/", (ctx) => {
    return {sucess: true, message: "Welcome to DenoLand!"}
});

await app.run();
