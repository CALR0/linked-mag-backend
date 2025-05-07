# Usamos una imagen oficial de Node
FROM node:18
# Creamos directorio para el código
WORKDIR /app
# Copiamos los archivos de configuración
COPY package*.json ./
# Instalamos las dependencias
RUN npm install
# Copiamos el resto del código
COPY . .
# Exponemos el puerto 3000
EXPOSE 3000
# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
