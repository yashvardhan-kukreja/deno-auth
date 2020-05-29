FROM hayd/deno:latest
EXPOSE 8000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./deps.ts .  
### Caching the compilation of deps.ts to install and cache all the dependencies
RUN deno cache --unstable deps.ts
COPY . .
### Caching the compilation of app.ts
RUN deno cache --unstable app.ts             
CMD ["run", "--unstable", "--allow-net", "--allow-read", "--allow-write", "--allow-plugin", "--allow-env", "app.ts"]