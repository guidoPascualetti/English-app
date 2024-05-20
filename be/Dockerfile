FROM node:latest

WORKDIR /app

# Copiar la aplicación al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Declarar el volumen
VOLUME /app


CMD ["npm", "run", "dev"]


# FROM node:12.22.1-alpine3.11

# RUN apk add --no-cache python2 build-base

# WORKDIR /app

# COPY . /app

# RUN npm install


# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# ADD . /opt/app
# EXPOSE 3000



# FROM mhart/alpine-node:latest

# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# WORKDIR /opt/app
# ADD . /opt/app
# EXPOSE 3000
# CMD ["npm", "start"] 