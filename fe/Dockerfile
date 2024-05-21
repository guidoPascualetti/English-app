# Usa una imagen base oficial de Node.js (si tu frontend usa Node.js)
FROM node:latest

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre tu aplicación (ajústalo según sea necesario)
EXPOSE 3001

# Comando para correr la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]