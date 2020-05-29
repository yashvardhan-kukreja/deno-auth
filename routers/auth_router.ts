import { Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { registerUser, loginUser } from "../controllers/auth_controller.ts";

const router = new Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;