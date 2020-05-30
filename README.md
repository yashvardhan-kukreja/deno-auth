# Deno-auth - Playing around with Deno
User authentication functionalities like "registration", "logging in" (jwt and brypt also there :P) in accordance with MVC architecture to give a view of API development with Deno.

---
## Functionalities Implemented:

- **Registration** (played around with bcrypt package for deno here)
- **Logging in** (played around with jwt package for deno here)
- **CRUD operations** -> creating, reading, deleting users
---
## Project Structure:
- **/controllers/auth_controller.ts** - The functions with their core logic behind the individual API endpoints. Things like login, registration, everything are "implemented" here.
- **/routers/auth_router.ts** - The definitions of final API endpoints/routes.
- **log-monitor.js** - The server-side script corresponding to the log monitor mini application for the friend Alex to tail the logs in real time without loading the entire app.log file again and again.
- **app.ts** - The main script
- **docker-compose.yml** - Well, it is the docker-compose to run the above dockerfile with rightful configuration and manner.
- **.dockerignore** - It consists the folders to ignore while executing docker build behind the scenes.
- **.gitignore** - It consists the folders to ignore while git is tracking changes in the entire project.
------
## Running the project:
**1). For running through docker ->**
```
docker-compose up --build
```
<br> (Base image required: <b>hayd/deno:latest</b>) <br> <br>
**2). For running through deno ->** <br>
```
deno run --unstable --allow-net --allow-read --allow-write --allow-plugin --allow-env app.ts
```

---
