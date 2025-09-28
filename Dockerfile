# Usa una imagen oficial de Node.js
FROM node:22

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./
COPY tsconfig.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila el proyecto TypeScript
RUN npm run build

# Ejecuta los tests con coverage
CMD ["npm", "run", "test:coverage"]