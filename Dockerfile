FROM node:22

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN chmod +x node_modules/.bin/tsc

RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la app (ajusta si tu entrypoint es diferente)
CMD ["node", "dist/index.js"]