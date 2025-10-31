FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

# Exposer le port
EXPOSE 3000

ENV PORT=3000

# Démarrer l'application
CMD ["npm", "run", "start:prod"]